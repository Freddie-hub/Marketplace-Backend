import "dotenv/config";
import transporter from "../lib/nodemailerTransporter";
import { InviteUserEmailArgs } from "../types/InviteUserEmailArgs";

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  try {
    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER environment variable is not set");
    }

    const resetUrl = `${process.env.FRONTEND_URL || 'https://localhost:3000'}/password-reset?token=${resetToken}`;
    
    const result = await transporter.sendMail({
      from: {
        name: 'Green Mafia',
        address: process.env.EMAIL_USER
      },
      to: email, 
      subject: "Password Reset Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Password Reset Request</h2>
          <p>Hello,</p>
          <p>You requested a password reset for your Coffee System account. If you did not initiate this request, please ignore this email.</p>
          <p>Click the button below to reset your password:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="background-color: #007bff; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 4px; display: inline-block;">
              Reset Password
            </a>
          </div>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all; color: #007bff;">${resetUrl}</p>
          <p><strong>This link will expire in 1 hour for security reasons.</strong></p>
          <p>Thank you,<br>Green Mafia Team</p>
        </div>
      `
    });
    
    console.log("Password reset email sent successfully:", result.messageId);
    return result;
  } catch (error: any) {
    console.error("Password Reset Email Error:", error.message);
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }
}

export async function sendInvitationEmail(args: InviteUserEmailArgs) {
  try {
    const { email, firstName, lastName, role, password, warehouseName, warehouseLocation, warehouseAddress, crops, invitationToken } = args.args;

    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER environment variable is not set");
    }

    const acceptUrl = `${process.env.FRONTEND_URL || 'https://localhost:3000'}/invite/accept?token=${invitationToken}`;
    const rejectUrl = `${process.env.FRONTEND_URL || 'https://localhost:3000'}/invite/reject?token=${invitationToken}`;

    const cropsTable = crops.map(crop => `
      <tr>
        <td style="border: 1px solid #dee2e6; padding: 8px;">${crop.name}</td>
        <td style="border: 1px solid #dee2e6; padding: 8px;">${crop.quantity}</td>
      </tr>
    `).join('');

    const result = await transporter.sendMail({
      from: {
        name: "Green Mafia",
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: `Invitation to Join ${warehouseName} - Green Mafia`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #007bff; margin-bottom: 10px;">Welcome to Green Mafia</h1>
            <div style="height: 3px; background: linear-gradient(90deg, #007bff, #28a745); margin: 20px auto; width: 100px;"></div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">You've Been Invited!</h2>
            <p style="margin-bottom: 15px;">Hello <strong>${firstName} ${lastName || ''}</strong>,</p>
            <p style="margin-bottom: 15px;">
              You have been invited to join <strong>${warehouseName}</strong> (${warehouseLocation}, ${warehouseAddress}) 
              as a <strong>${role}</strong> on the Green Mafia platform.
            </p>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Your Details:</h3>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin-bottom: 10px;"><strong>Temporary Password:</strong> <code style="background: #f1f3f4; padding: 2px 6px; border-radius: 4px; font-family: monospace;">${password}</code></p>
            <h4 style="color: #333; margin-top: 15px;">Crops:</h4>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
              <thead>
                <tr>
                  <th style="border: 1px solid #dee2e6; padding: 8px; background: #f1f3f4;">Crop Name</th>
                  <th style="border: 1px solid #dee2e6; padding: 8px; background: #f1f3f4;">Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${cropsTable}
              </tbody>
            </table>
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 4px;">
              <small style="color: #856404;">
                <strong>⚠️ Security Notice:</strong> Please change your password after your first login.
              </small>
            </div>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${acceptUrl}" 
               style="background: linear-gradient(135deg, #28a745, #218838); color: white; 
                      padding: 15px 30px; text-decoration: none; border-radius: 6px; 
                      display: inline-block; font-weight: bold; margin-right: 10px;
                      box-shadow: 0 2px 4px rgba(40,167,69,0.3); transition: all 0.3s ease;">
              Accept Invitation
            </a>
            <a href="${rejectUrl}" 
               style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; 
                      padding: 15px 30px; text-decoration: none; border-radius: 6px; 
                      display: inline-block; font-weight: bold;
                      box-shadow: 0 2px 4px rgba(220,53,69,0.3); transition: all 0.3s ease;">
              Reject Invitation
            </a>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #6c757d;">
              <strong>Can't click the buttons?</strong> Copy and paste these links in your browser:
            </p>
            <p style="word-break: break-all; color: #28a745; margin: 5px 0;">
              Accept: ${acceptUrl}
            </p>
            <p style="word-break: break-all; color: #dc3545; margin: 5px 0;">
              Reject: ${rejectUrl}
            </p>
            <p style="margin: 5px 0; font-size: 14px; color: #6c757d;">
              These links will expire in 24 hours.
            </p>
          </div>
          
          <div style="border-top: 1px solid #dee2e6; padding-top: 20px; margin-top: 30px;">
            <p style="margin-bottom: 10px;">Next Steps:</p>
            <ul style="margin: 10px 0; padding-left: 20px; color: #6c757d;">
              <li>Accept the invitation using the button above</li>
              <li>Log in with the provided credentials</li>
              <li>Change your password in account settings</li>
              <li>Complete your payment details (Mpesa)</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 14px; margin: 0;">
              Thank you for joining Green Mafia!<br>
              <strong>The Green Mafia Team</strong>
            </p>
          </div>
        </div>
      `
    });
    
    console.log("Invitation email sent successfully to:", email);
    return result;
  } catch (error: any) {
    console.error("Invitation Email Error:", error.message);
    throw new Error(`Failed to send invitation email: ${error.message}`);
  }
}