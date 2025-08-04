"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteUserEmail = inviteUserEmail;
const emailSender_1 = require("./emailSender");
async function inviteUserEmail(args) {
    try {
        const result = await (0, emailSender_1.sendInvitationEmail)(args);
        return result;
    }
    catch (error) {
        console.error("Invite User Email Error:", error.message);
        throw new Error(`Failed to send invitation email: ${error.message}`);
    }
}
