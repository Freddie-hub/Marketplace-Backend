export interface GoogleSignupArgs {
    args: {
      warehouse_name?: string;
      warehouse_location?: string;
      warehouse_address?: string;
      warehouse_capacity?: number;
      warehouse_phone?: string;
      warehouse_email?: string;
      googleUserData: {
        email: string;
        Fname: string;
        Lname?: string;
        googleId: string;
        photo?: string;
      };
      role: 'FARMER' | 'WAREHOUSE_GUY';
    };
  }