export interface InviteUserEmailArgs {
  args: {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    password: string;
    warehouseName?: string;
    warehouseLocation?: string;
    warehouseAddress: string; // ✅ Required and must be a string
  };
}
