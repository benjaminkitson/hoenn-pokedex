import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { pokedex } from "./pokedex.js";
const typeDefs = `#graphql
  type Pokemon {
    id: String,
    name: String,
    ability: String,
    height: Int,
    weight: Int,
    types: [String],
    mainImageSrc: String,
    thumbImageSrc: String,
    description: String,
    evolutionChain: [String],
  }

  type Query {
    pokemon: [Pokemon]
  }
`;
const resolvers = {
    Query: {
        pokemon: () => pokedex,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
