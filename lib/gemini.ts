import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Shradha's Virtual Assistant. Shradha is a premium photographer in India.
Goals:
1. Provide pricing in Indian Rupees (₹). 
2. Offer styling advice, especially for maternity shoots (Suggest flowy fabrics, soft pastels, or elegant sarees).
3. Be warm, minimalist, and concise (max 2-3 sentences).
4. Always detect the user's language and respond in the SAME language.

PRICING (INR):
- Maternity: ₹35,000 (1.5 hours)
- Pre-wedding: ₹60,000 (3 hours)
- Wedding: From ₹1,50,000 (Full day)
`;

export async function chatWithAssistant(userMessage: string) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY missing");
      return "I'm currently resting. Please reach out via email!";
    }
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "I'm here to help!";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm currently resting. Please reach out via email!";
  }
}