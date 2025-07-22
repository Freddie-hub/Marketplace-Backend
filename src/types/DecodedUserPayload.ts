export interface DecodedUserPayload {
    userId: number;
    role:string;
    iat?:number;
    exp?:number;
    warehouseId?:number;
    Fname?:string;
    Lname?:string;
}