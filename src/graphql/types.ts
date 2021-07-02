import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getTeam: [Team],
  }

  type Team {
      id: String,
      name: String
  }
   
  type Match {
      team1: Team,
      team2: Team
  }

`;