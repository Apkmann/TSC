
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStudyResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert TNPSC (Tamil Nadu Public Service Commission) exam tutor. Provide clear, structured, and exam-oriented answers for Group IV preparation. Use simple English and where appropriate, mention the Tamil context or terms as the exam has a strong emphasis on Tamil literature and history.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
}
