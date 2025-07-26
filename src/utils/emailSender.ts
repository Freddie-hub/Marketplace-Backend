import "dotenv/config"
import transporter from "../lib/nodemailerTransporter"

export async function sendPasswordResetEmail(email: string, resetToken: string) {
    try {
        if (!process.env.EMAIL_USER) {
            throw new Error("EMAIL_USER environment variable is not set")
        }

    //  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/password-reset?token=${resetToken}`
          const resetUrl = `${process.env.FRONTEND_URL || 'https://marketplace-zeta-fawn.vercel.app'}/password-reset?token=${resetToken}`
        
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
                    <p>Thank you,<br>Shule Hub System</p>
                </div>
            `
        })
        
        console.log("Password reset email sent successfully:", result.messageId)
        return result
    } catch (error: any) {
        console.error("Password Reset Email Error:", error.message)
        throw new Error(`Failed to send password reset email: ${error.message}`)
    }
}