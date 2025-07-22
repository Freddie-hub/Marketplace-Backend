"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteUserEmail = inviteUserEmail;
require("dotenv/config");
const nodemailerTransporter_1 = __importDefault(require("../lib/nodemailerTransporter"));
async function inviteUserEmail(args) {
    try {
        const { email, firstName, lastName, role, password } = args.args;
        console.log("These are the inputed arguments", args.args);
        if (!process.env.EMAIL_USER) {
            throw new Error("EMAIL_USER environment variable is not set");
        }
        const loginUrl = `${process.env.FRONTEND_URL || 'https://marketplace-zeta-fawn.vercel.app'}/login`;
        const result = await nodemailerTransporter_1.default.sendMail({
            from: {
                name: "Coffee System",
                address: process.env.EMAIL_USER
            },
            to: email,
            subject: "Welcome to CoffeeHub - Account Created",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #007bff; margin-bottom: 10px;">Welcome to Shule Hub</h1>
                        <div style="height: 3px; background: linear-gradient(90deg, #007bff, #28a745); margin: 20px auto; width: 100px;"></div>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h2 style="color: #333; margin-top: 0;">Account Created Successfully!</h2>
                        <p style="margin-bottom: 15px;">Hello <strong>${firstName} ${lastName}</strong>,</p>
                        <p style="margin-bottom: 15px;">
                            An account has been created for you at <strong>chamaSync</strong> on the Shule Hub platform. 
                            You have been assigned the role of <strong>${role}</strong>.
                        </p>
                    </div>
                    
                    <div style="background: #ffffff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h3 style="color: #333; margin-top: 0;">Your Login Credentials:</h3>
                        <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
                        <p style="margin-bottom: 15px;"><strong>Temporary Password:</strong> <code style="background: #f1f3f4; padding: 2px 6px; border-radius: 4px; font-family: monospace;">${password}</code></p>
                        <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 4px; margin-top: 15px;">
                            <small style="color: #856404;">
                                <strong>⚠️ Security Notice:</strong> Please change your password after your first login for security purposes.
                            </small>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${loginUrl}" 
                           style="background: linear-gradient(135deg, #007bff, #0056b3); 
                                  color: white; 
                                  padding: 15px 30px; 
                                  text-decoration: none; 
                                  border-radius: 6px; 
                                  display: inline-block; 
                                  font-weight: bold;
                                  box-shadow: 0 2px 4px rgba(0,123,255,0.3);
                                  transition: all 0.3s ease;">
                            Login to Your Account
                        </a>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0;">
                        <p style="margin: 0; font-size: 14px; color: #6c757d;">
                            <strong>Can't click the button?</strong> Copy and paste this link in your browser:
                        </p>
                        <p style="word-break: break-all; color: #007bff; margin: 5px 0 0 0; font-size: 14px;">
                            ${loginUrl}
                        </p>
                    </div>
                    
                    <div style="border-top: 1px solid #dee2e6; padding-top: 20px; margin-top: 30px;">
                        <p style="margin-bottom: 10px;">Need help getting started?</p>
                        <ul style="margin: 10px 0; padding-left: 20px; color: #6c757d;">
                            <li>Login with the credentials provided above</li>
                            <li>Change your password in the account settings</li>
                            <li>Complete your profile information</li>
                            <li>Explore your dashboard and available features</li>
                        </ul>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                        <p style="color: #6c757d; font-size: 14px; margin: 0;">
                            Thank you for joining chamaSync!<br>
                            <strong>The chamaSync Team</strong>
                        </p>
                    </div>
                </div>
            `
        });
        console.log("Invitation email sent successfully to:", email);
        return result;
    }
    catch (error) {
        console.error("User invitation Email Error:", error.message);
        throw new Error(`Invite User email error: ${error.message}`);
    }
}
