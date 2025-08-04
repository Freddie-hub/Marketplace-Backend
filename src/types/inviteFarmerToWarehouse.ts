export interface CropInput {
  name: string;
  quantity: number;
}

export interface InviteFarmerToWarehouseInput {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  crops: CropInput[];
  warehouseId: number;
  warehouseLocation: string;
  warehouseAddress: string;
  password?: string;
}