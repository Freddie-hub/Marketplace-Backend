import { InviteUserEmailArgs } from "../types/InviteUserEmailArgs";
import { sendInvitationEmail } from "./emailSender";

export async function inviteUserEmail(args: InviteUserEmailArgs) {
  try {
    const result = await sendInvitationEmail(args);
    return result;
  } catch (error: any) {
    console.error("Invite User Email Error:", error.message);
    throw new Error(`Failed to send invitation email: ${error.message}`);
  }
}