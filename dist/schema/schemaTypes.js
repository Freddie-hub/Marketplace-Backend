"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typez = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typez = (0, graphql_tag_1.default) `
type Product{
  id: Int
  name:String
  grade: String
  quantity:Int
  price:Float
  variety:String
  location:String
  image:String
  userId: Int    
}

type response{
    status:String
    message:String
}
type FarmerResponse{
  status:String
  message:String
  token:String
  user:User
  requiresEmailConfirmation:String

}
type googleResponse{
  status:String
  message:String
  user:User
  token:String
}

type LoginRes{
    status:String
    message:String
    token:String
    user:User
}

type productRes{
    status:String
    message:String
    product: [Product]
}

type User{
  id: Int
  Fname:String
  Mname:String
  Lname:String
  photo:String
  email:String
  role:Role
  password:String 
  warehouse:Warehouse
  phone:String
  address:String
  status:String
  emailVerified:Boolean
  # requiresEmailConfirmation:Boolean
}

type Farmer{
  id: Int
  username: String
  email: String
}
type warehouseResponse{
  status:String
  message:String
  user: User
  token:String
}
type Warehouse{
  id: Int
  name: String
  location: String
  managerId: Int
  address:String
  capacity:String
  phone:String
  email:String
}

`;
