import gql from "graphql-tag";
import { typez } from "./schemaTypes";
import { inputs } from "./schemaInputs";
import { enums } from "./schemaEnums";
import invitationSchema from "./invitationSchema";

const typeDefs = gql`
  ${inputs}
  ${enums}
  ${typez}
  ${invitationSchema}

  type Query {
    AllProducts: [productRes!]!
    ProductById(id: Int!): Product
    ProductsByFarmer(farmerId: Int!): [Product!]!
    ProductsByWarehouse(warehouseId: Int!): [Product!]!
  }

  type Mutation {
    createFarmer(args: FarmerArgs): FarmerResponse!
    createWarehouseWithManager(args: WarehouseRegistrationArgs): warehouseResponse!
    GoogleSignup(args: GoogleSignupInput): googleResponse!
    confirmEmail(token: String!): response!
    resendConfirmationEmail(email: String!): response!
    inviteFarmer(input: InviteFarmerInput!): InvitationResponse!
    acceptInvitation(token: String!): InvitationResponse!
    rejectInvitation(token: String!): InvitationResponse!
    updateFarmerPaymentDetails(mpesaNumber: String!): InvitationResponse!
    Login(args: LoginArgs): LoginRes!
    requestPasswordReset(args: PasswordResetArgs): response!
    resetPassword(args: ResetPasswordArgs): response!
    createProduct(args: ProductArgs): response!
    updateProduct(args: UpdateProductArgs): response!
    deleteProduct(id: Int!): response!
  }
`;

export default typeDefs;