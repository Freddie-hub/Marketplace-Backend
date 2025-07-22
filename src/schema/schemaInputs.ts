import gql from "graphql-tag"

export const inputs = gql`
input LoginArgs{
    email:String
    password:String
}

input ProductArgs{
  name:String
  grade: String
  quantity:Int
  price:Float
  variety:String
  location:String
  image:String
  userId: Int
  description:String
  warehouseId: Int
  farmerId:Int
}

input FarmerArgs{
    email:String
    password:String
    Fname:String
    role:Role
    Mname:String
    Lname:String
    phone:String
    address:String
    photo:String
}

input WarehouseRegistrationArgs{
    email:String
    password:String
    Fname:String
    Mname:String
    Lname:String
    phone:String
    address:String
    photo:String
    managerEmail: String
    warehouse_name:String!
    warehouse_location:String!
    warehouse_address:String!
    warehouse_capacity:Int!
    warehouse_phone:String!
    warehouse_email:String!
}
input GoogleUserDataInput {
  email: String!
  Fname: String!
  Lname: String
  googleId: String!
  photo: String
}

input GoogleSignupInput {
  role: String!
  warehouse_name: String
  warehouse_location: String
  warehouse_address: String
  warehouse_capacity: Int
  warehouse_phone: String
  warehouse_email: String
  googleUserData: GoogleUserDataInput!
}


input PasswordResetArgs{
    email: String
}

input ResetPasswordArgs{
    token: String!
    newPassword: String!
    confirmPassword:String!
}

input UpdateProductArgs{
    id: Int
    name: String
    grade: String
    quantity: Int
    price: Float
    variety: String
    location: String
    image: String
}
`