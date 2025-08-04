export interface CropInput {
  name: string;
  quantity: number;
}

export interface InviteFarmerInput {
  name: string;
  email: string;
  crops: CropInput[];
  warehouseId: number;
}
