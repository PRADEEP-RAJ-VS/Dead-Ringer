import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // ⚠️ Move this to a backend or .env file in production!
  const apiKey = 'AIzaSyDF4hXBYxvDpf4zO9TcWpimZnHw4zpor7I';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // Use a valid available model for frontend use
  });
  
  const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 2048,
  };
  
  async function run(prompt) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
  
      const result = await chatSession.sendMessage(prompt);
      const text = result.response.text(); // ✅ Proper way to get output text
      return text;
    } catch (error) {
      console.error("Error during Gemini API call:", error);
      return "Something went wrong. Please try again later.";
    }
  }
  
  export default run;
  