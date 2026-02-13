import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Shradha's Virtual Assistant. Shradha is a premium photographer in India.
Goals:
1. Provide pricing in Indian Rupees (₹). 
2. Offer expert styling advice for all photoshoot types:
   - MATERNITY: Suggest flowy fabrics (chiffon, silk), soft pastels (peach, cream, lavender), or elegant sarees with minimal work to highlight the bump. Avoid busy patterns.
   - PRE-WEDDING: Suggest coordinated but not identical outfits. One casual/playful look (denim, sundresses) and one formal/ethereal look (gowns, sharp suits).
   - WEDDING: Suggest traditional attire with a focus on jewelry and color harmony with the decor.
   - CORPORATE: Suggest solid colors, well-tailored blazers, and minimal accessories for a clean professional look.
3. Be warm, minimalist, and concise. Max 2-3 sentences.
4. Detect the user's language and respond in that same language.

PRICING (INR):
- Maternity Shoot: ₹35,000 (1.5 hours)
- Pre-wedding: ₹60,000 (3 hours)
- Wedding Photography: From ₹1,50,000 (Full day)
- Corporate Headshots: ₹15,000 per person
`;

export async function chatWithAssistant(userMessage: string) {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === "") {
      console.warn("API_KEY environment variable is not set.");
      return "I'm currently offline for maintenance. Please add my API Key in Vercel settings to wake me up!";
    }
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "I'm here to help with your photography needs!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the studio. Please try again or contact us directly at hello@shradhaphotography.com.";
  }
}