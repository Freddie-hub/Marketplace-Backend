import jwt from "jsonwebtoken"
import 'dotenv/config'
import { DecodedUserPayload } from "../types/DecodedUserPayload"

export const getCurrentUser = (authHeader?:string): DecodedUserPayload | null =>{
    try {
        console.log("Get current user called with", authHeader?"Header Present":"No Header")
        if (!authHeader || !authHeader.startsWith('Bearer ')){
            // console.log("::Invalid or missing Bearer token format::")
            return null
        }
        const token = authHeader.split(' ')[1];
        if (!token){
            // console.log("Token Extraction failed")
            return null
        }
        const decoded = jwt.verify(
            token, process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application"
        ) as DecodedUserPayload
        // console.log("Token Extraction Successful", {userId: decoded.userId}) 
        return decoded
    } catch (error) {
        console.error("JWT verification failed", error)
        return null
    }
    }

export const requireAuth = (user:DecodedUserPayload | null | undefined) =>{
    if (!user) {
        throw new Error('Authentication required')
    }
    return user
}
