"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GoogleGeminiAI_1 = __importDefault(require("../init/GoogleGeminiAI"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const gemini = GoogleGeminiAI_1.default;
console.log("api key: ", process.env.GOOGLE_GEMINI_API_KEY);
app.post("/gemini", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("bosy : ", req.body);
    const prompt = req.body.prompt;
    if (!prompt) {
        res.status(403).json("No prompt recieved!");
    }
    const result = yield gemini.generateContent(prompt);
    res.send(result);
    console.log(result.response.text());
}));
app.listen(port, () => console.log(`Ser ver working on port ${port}`));
