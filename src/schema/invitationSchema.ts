import gql from "graphql-tag";

const invitationSchema = gql`
  type InvitationResponse {
    success: Boolean!
    message: String!
    redirectUrl: String
  }

  type Mutation {
    acceptInvitation(token: String!): InvitationResponse!
    rejectInvitation(token: String!): InvitationResponse!
  }
`;

export default invitationSchema;