"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
class GoogleAIConfig {
    // Private constructor to prevent direct instantiation
    constructor() {
        this.apiKey = process.env.GOOGLE_GEMINI_API_KEY || ""; // Load from env variables
        if (!this.apiKey) {
            console.warn("Warning: GOOGLE_AI_API_KEY is not set.");
        }
    }
    // Public method to get the singleton instance
    static getInstance() {
        if (!GoogleAIConfig.instance) {
            const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
            return GoogleAIConfig.instance = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });
        }
        console.log(" apikey: ", process.env.GOOGLE_GEMINI_API_KEY);
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        return model;
    }
}
// Usage Example
const googleAIConfig = GoogleAIConfig.getInstance();
exports.default = googleAIConfig;
