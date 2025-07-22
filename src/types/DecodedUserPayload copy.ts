export interface DecodedUserPayload {
    userId: number;
    role:string;
    iat?:number;
    exp?:number;
    schoolId?:number;
    Fname?:string;
    Lname?:string;
}