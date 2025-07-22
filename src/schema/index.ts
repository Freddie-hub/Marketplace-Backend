import gql from "graphql-tag"
import { typez } from "./schemaTypes";
import { inputs } from "./schemaInputs";
import { enums } from "./schemaEnums";


const typeDefs = gql`

${inputs}
${enums}
${typez}

type Query{
    AllProducts: [productRes!]!
    ProductById(id: Int!): Product
    ProductsByFarmer(farmerId: Int!): [Product!]!
    ProductsByWarehouse(warehouseId: Int!): [Product!]!
}

type Mutation{
    createFarmer(args: FarmerArgs): FarmerResponse!
    createWarehouseWithManager(args: WarehouseRegistrationArgs): warehouseResponse!
    GoogleSignup(args: GoogleSignupInput): googleResponse!
    confirmEmail(token: String!): response!
    resendConfirmationEmail(email: String!): response!
    inviteFarmerToWarehouse(farmerId: Int!, warehouseId: Int!): response!
    Login(args: LoginArgs): LoginRes!
    requestPasswordReset(args: PasswordResetArgs): response!
    resetPassword(args: ResetPasswordArgs): response!
    createProduct(args: ProductArgs): response!
    updateProduct(args: UpdateProductArgs): response!
    deleteProduct(id: Int!): response!
}
`
export default typeDefs