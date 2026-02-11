
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Shradha's Virtual Assistant. Shradha is a high-end photographer based in the Pacific Northwest.
- Photography Style: Natural light, lifestyle, intimate portraiture, PNW aesthetics.
- Services: Wedding ($2500+), Lifestyle Portraits ($450+), Commercial/Branding (Custom).
- Personality: Warm, professional, artistic, and minimalist.
- Tone: Elegant and helpful.
- Rule: Keep responses concise (under 2 sentences if possible). Always encourage booking a session.
`;

export async function chatWithAssistant(userMessage: string) {
  try {
    // The API_KEY is provided by the execution environment
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is not defined in the environment.");
      return "I'm currently resting. Please reach out to Shradha via email!";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    // Accessing .text as a property as per latest @google/genai standards
    return response.text || "I'm happy to help with your photography needs!";
  } catch (error) {
    console.error("Assistant API Error:", error);
    return "I'm having a bit of trouble connecting to Shradha's creative studio. Please try again in a moment!";
  }
}
