import "dotenv/config";
import transporter from "../lib/nodemailerTransporter";
import { SendConfirmationEmailArgs } from "../types/SendConfirmationEmailArgs";


export default async function sendConfirmationEmail(args: SendConfirmationEmailArgs) {
    try {
        const { email, firstName, lastName, confirmationToken } = args.args;
        console.log("Sending confirmation email to:", email);
        
        if (!process.env.EMAIL_USER) {
            throw new Error("EMAIL_USER environment variable is not set");
        }
        
        const confirmationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/confirm-email?token=${confirmationToken}`;
        const loginUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/login`;
        
        const result = await transporter.sendMail({
            from: {
                name: "CoffeeHub",
                address: process.env.EMAIL_USER
            },
            to: email,
            subject: "Confirm Your Email - CoffeeHub Account Activation",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #007bff; margin-bottom: 10px;">Welcome to CoffeeHub</h1>
                        <div style="height: 3px; background: linear-gradient(90deg, #007bff, #28a745); margin: 20px auto; width: 100px;"></div>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h2 style="color: #333; margin-top: 0;">Email Confirmation Required</h2>
                        <p style="margin-bottom: 15px;">Hello <strong>${firstName} ${lastName}</strong>,</p>
                        <p style="margin-bottom: 15px;">
                            Thank you for registering with CoffeeHub! To complete your account setup and start using our platform, 
                            please confirm your email address by clicking the button below.
                        </p>
                    </div>
                    
                    <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 0; color: #856404;">
                            <strong>⚠️ Important:</strong> Your account will remain inactive until you confirm your email address. 
                            You won't be able to log in until this step is completed.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${confirmationUrl}" 
                           style="background: linear-gradient(135deg, #28a745, #20c997); 
                                  color: white; 
                                  padding: 15px 30px; 
                                  text-decoration: none; 
                                  border-radius: 6px; 
                                  display: inline-block; 
                                  font-weight: bold;
                                  box-shadow: 0 2px 4px rgba(40,167,69,0.3);
                                  transition: all 0.3s ease;">
                            ✓ Confirm My Email Address
                        </a>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0;">
                        <p style="margin: 0; font-size: 14px; color: #6c757d;">
                            <strong>Can't click the button?</strong> Copy and paste this link in your browser:
                        </p>
                        <p style="word-break: break-all; color: #007bff; margin: 5px 0 0 0; font-size: 14px;">
                            ${confirmationUrl}
                        </p>
                    </div>
                    
                    <div style="background: #e9ecef; padding: 15px; border-radius: 6px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0; font-size: 16px;">What happens next?</h3>
                        <ol style="margin: 10px 0; padding-left: 20px; color: #6c757d;">
                            <li>Click the confirmation link above</li>
                            <li>Your account will be automatically activated</li>
                            <li>You'll be redirected to login to your account</li>
                            <li>Start exploring CoffeeHub features!</li>
                        </ol>
                        <p style="margin: 15px 0 0 0; color: #6c757d; font-size: 14px;">
                            After confirmation, you can log in at: 
                            <a href="${loginUrl}" style="color: #007bff;">${loginUrl}</a>
                        </p>
                    </div>
                    
                    <div style="background: #d1ecf1; border: 1px solid #bee5eb; padding: 15px; border-radius: 6px; margin: 20px 0;">
                        <p style="margin: 0; color: #0c5460; font-size: 14px;">
                            <strong>🔒 Security Notice:</strong> This confirmation link will expire in 24 hours for your security. 
                            If you didn't create this account, please ignore this email.
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                        <p style="color: #6c757d; font-size: 12px; margin: 0;">
                            Need help? Contact us at support@coffeehub.com<br>
                            This email was sent to ${email}
                        </p>
                        <p style="color: #6c757d; font-size: 14px; margin: 10px 0 0 0;">
                            <strong>The CoffeeHub Team</strong>
                        </p>
                    </div>
                </div>
            `
        });
        
        console.log("Email confirmation sent successfully to:", email);
        return result;
        
    } catch (error: any) {
        console.error("Email confirmation error:", error.message);
        throw new Error(`Email confirmation error: ${error.message}`);
    }
}