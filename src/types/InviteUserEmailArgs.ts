export interface CropInput {
  name: string;
  quantity: number;
}

export interface InviteUserEmailArgs {
  args: {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    password: string;
    warehouseName?: string;
    warehouseLocation?: string;
    warehouseAddress?: string | null;
    crops: { name: string; quantity: number }[]; 
    invitationToken: string;
  };
}
