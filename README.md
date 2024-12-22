# mumbaihack24
Mumbai hack hackathon backend app (Nodejs, OLAMA, LLMA 3.0)

---

# SmartFoodAI Backend 🌿  
**Empowering Smarter Food Choices with AI**  

SmartFoodAI is a backend solution designed to process nutritional information from packaged food labels, enabling users to make informed, healthier decisions. This application leverages cutting-edge AI models, including **Meta's Llama 3.2**, running locally using **OLMa** for privacy and efficiency.  

---

## How It Works  
1. **OCR on Device:** The app uses on-device OCR to capture food label information, ensuring user privacy.  
2. **Backend Processing:**  
   - **API 1 - Health Insights:** Evaluates the extracted elements against a trained dataset, providing a binary health suggestion (*Healthy* or *Unhealthy*).  
   - **API 2 - Detailed Descriptions:** Analyzes and returns detailed information about the individual components detected in the OCR output.  

The backend APIs are optimized for local computation with **OLMa**, offering a responsive and private experience without reliance on cloud processing.  

---

## Powered by Meta’s Llama 3.2 🤖  
Meta's Llama 3.2 brings advanced AI capabilities that enhance the application:  
- **Local AI Inference:** Ensures speed and privacy with models optimized for on-device use.  
- **Multimodal Processing:** Capable of understanding and analyzing both text and images, crucial for processing food labels.  
- **Comprehensive Analysis:** Extracts meaningful insights, enabling smarter decisions.  

For more about Llama 3.2, visit [Meta AI](https://ai.meta.com).  

---

## Built for Innovation 🌍  
**Mumbai Hacks 2024:** This project was born at **Mumbai Hacks**, the largest AI hackathon, recognized by the **Guinness World Records**. With over 10,000 participants, this event, hosted at **ATLAS SkillTech University**, showcased cutting-edge AI solutions. SmartFoodAI represents the spirit of this event, demonstrating how AI can address real-world challenges.  

---

## APIs Overview  
1. **Health Insights API:**  
   - Input: OCR data (JSON)  
   - Output: Binary health suggestion (*Healthy/Unhealthy*)  

2. **Component Details API:**  
   - Input: OCR data (JSON)  
   - Output: Detailed analysis of each component in the product (e.g., nutritional value, potential health impacts).  

### Technology Stack  
- **AI Models:** Meta Llama 3.2 with OLMa for local execution.  
- **Backend Framework:** Node.js with Express.  
- **On-Device OCR:** Enabled through a lightweight library for maximum privacy.  

---

## Getting Started  
1. **Install Dependencies:**  
   ```bash  
   npm install  
   ```  
2. **Run the Server:**  
   ```bash  
   npm start  
   ```  
3. Use the API endpoints for:  
   - Health suggestions.  
   - Component-level insights.  

---

### Contributing  
Contributions to improve SmartFoodAI are always welcome! Submit a PR or reach out with your ideas.  

---  
With SmartFoodAI, we're merging technology and health to create a smarter, healthier future. 🌟  
