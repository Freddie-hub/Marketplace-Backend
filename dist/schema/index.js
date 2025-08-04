"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const schemaTypes_1 = require("./schemaTypes");
const schemaInputs_1 = require("./schemaInputs");
const schemaEnums_1 = require("./schemaEnums");
const invitationSchema_1 = __importDefault(require("./invitationSchema"));
const typeDefs = (0, graphql_tag_1.default) `
  ${schemaInputs_1.inputs}
  ${schemaEnums_1.enums}
  ${schemaTypes_1.typez}
  ${invitationSchema_1.default}

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
    inviteFarmerToWarehouse(input: InviteFarmerToWarehouseInput!): InvitationResponse!
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
exports.default = typeDefs;
