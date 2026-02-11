
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
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting to Shradha's creative energy right now. Please try again or email her directly!";
  }
}
