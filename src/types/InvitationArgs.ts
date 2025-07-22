export interface InvitationArgs {
    args: {
      receiverEmail: string;
      warehouseId: number;
      message?: string;
      expiresInDays?: number;
    };
  }