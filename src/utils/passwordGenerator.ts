import bcrypt from "bcryptjs";
import crypto from "crypto";

export const generatePassword = async (): Promise<{ plainPassword: string; hashedPassword: string }> => {
  try {
    // Generate a 12-character password with letters, numbers, and symbols
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let plainPassword = "";
    for (let i = 0; i < 12; i++) {
      plainPassword += chars.charAt(crypto.randomInt(chars.length));
    }

    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    return { plainPassword, hashedPassword };
  } catch (error: any) {
    console.error("Error generating password:", error.message);
    throw new Error("Failed to generate password");
  }
};