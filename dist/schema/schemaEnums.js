"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enums = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.enums = (0, graphql_tag_1.default) `
enum Role {
  ADMINISTRATOR
  FARMER
  BUYER
  WAREHOUSE_GUY
}

enum UserStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  DELETED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  CANCELLED
}

enum PaymentMethod {
  CASH
  BANK_TRANSFER
  MOBILE_MONEY
  CHEQUE
  CREDIT_CARD
  DEBIT_CARD
}

enum InvitationStatus {
  PENDING
  ACCEPTED
  REJECTED
  EXPIRED
}

enum MovementType {
  IN
  OUT
  ADJUSTMENT
  TRANSFER
  DAMAGED
  EXPIRED
}

enum ActionType {
  CREATED
  UPDATED
  DELETED
  ACTIVATED
  DEACTIVATED
  SUSPENDED
  INVITED
  ACCEPTED_INVITATION
  REJECTED_INVITATION
  PAYMENT_PROCESSED
  INVENTORY_UPDATED
  PASSWORD_RESET
  LOGIN
  LOGOUT
}

enum EntityType {
  USER
  PRODUCT
  WAREHOUSE
  PAYMENT
  INVITATION
  INVENTORY
  SYSTEM
}
`;
