
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Shradha's Virtual Assistant. Shradha is a premium photographer specializing in Maternity, Pre-Wedding, Wedding, and Corporate photography.
Your goal is to provide expert advice on photography services, pricing in Indian Rupees (₹), and styling recommendations.

SERVICES & PRICING (INR):
1. Maternity Shoot (₹35,000): 1.5-hour session. Includes access to our exclusive 'Maternity Gown Closet'. 30+ edited photos.
2. Pre-Wedding Session (₹60,000): 3-hour session, 2 locations, 50+ high-res edited photos.
3. Wedding Photography (Starting at ₹1,50,000): Full day coverage, 2 lead photographers, cinematic highlights, and luxury photo album.
4. Corporate/Branding (₹15,000 per person): Professional headshots. 5 edited photos per person.
5. Mini Lifestyle Session (₹12,000): 30 minutes, 10 edited photos.

DRESS CODE & STYLING RECOMMENDATIONS:
- Maternity: Focus on flowy fabrics like silk or lace. Suggest maxi dresses in soft pastels (peach, cream) or elegant sarees that highlight the bump.
- Pre-Wedding: One formal look and one casual coordinated look. Use earth tones for a timeless PNW/Elegant aesthetic.

LANGUAGE RULES:
ALWAYS respond in the SAME LANGUAGE as the customer (e.g., Hindi, English, Marathi, Spanish).

TONE:
Elegant, warm, and professional. Always suggest the "Book" tab for scheduling sessions.
`;

export async function chatWithAssistant(userMessage: string) {
  try {
    // Initialize GoogleGenAI with the environment variable API key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });
    
    return response.text || "I'm here to help with your photography needs!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return a descriptive error to help identify configuration issues on deployment platforms
    return "I'm experiencing a temporary connection issue with the studio's brain. Please ensure your session is active and try again, or visit our Profile tab for direct contact!";
  }
}
