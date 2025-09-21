const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    actors: [Actor]
    actor(id: ID!): Actor
  }

  type Mutation {
    createActor(name: String!, movie: String!): Actor
    updateActor(id: ID!, name: String, movie: String): Actor
    deleteActor(id: ID!): Actor
  }

  type Actor {
    id: ID!
    name: String!
    movie: String!
  }
`;