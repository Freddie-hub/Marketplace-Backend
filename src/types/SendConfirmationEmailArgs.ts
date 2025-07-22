export interface SendConfirmationEmailArgs {
    args: {
        email: string;
        firstName: string;
        lastName: string;
        confirmationToken: string;
    }
}