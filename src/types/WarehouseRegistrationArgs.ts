export interface WarehouseRegistrationArgs {
    args: {
      email: string;
      password?: string;
      Fname: string;
      Mname?: string;
      Lname: string;
      phone?: string;
      address?: string;
      isGoogleUser?: boolean;
      googleId?: string;
      photo?: string;
      warehouse_name: string;
      warehouse_location: string;
      warehouse_address?: string;
      warehouse_capacity?: number;
      warehouse_phone?: string;
      warehouse_email?: string;
    };
  }