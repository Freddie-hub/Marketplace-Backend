"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = exports.getCurrentUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const getCurrentUser = (authHeader) => {
    try {
        console.log("Get current user called with", authHeader ? "Header Present" : "No Header");
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            // console.log("::Invalid or missing Bearer token format::")
            return null;
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            // console.log("Token Extraction failed")
            return null;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application");
        // console.log("Token Extraction Successful", {userId: decoded.userId}) 
        return decoded;
    }
    catch (error) {
        console.error("JWT verification failed", error);
        return null;
    }
};
exports.getCurrentUser = getCurrentUser;
const requireAuth = (user) => {
    if (!user) {
        throw new Error('Authentication required');
    }
    return user;
};
exports.requireAuth = requireAuth;
