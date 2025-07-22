export interface FarmerRegistrationArgs {
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
      role:'FARMER'|  'BUYER' | 'WAREHOUSE_GUY'
    };
  }
  