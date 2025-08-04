"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = __importDefault(require("crypto"));
const generatePassword = async () => {
    try {
        // Generate a 12-character password with letters, numbers, and symbols
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let plainPassword = "";
        for (let i = 0; i < 12; i++) {
            plainPassword += chars.charAt(crypto_1.default.randomInt(chars.length));
        }
        // Hash the password with bcrypt
        const hashedPassword = await bcryptjs_1.default.hash(plainPassword, 10);
        return { plainPassword, hashedPassword };
    }
    catch (error) {
        console.error("Error generating password:", error.message);
        throw new Error("Failed to generate password");
    }
};
exports.generatePassword = generatePassword;
