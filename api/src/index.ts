import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { pokedex } from "./pokedex.js";

const typeDefs = `#graphql
  type Pokemon {
    id: ID,
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
    pokedex: [Pokemon]
    pokemonById(id: ID!): Pokemon
    pokemonByIds(ids: [ID]!): [Pokemon]
  }
`;

const resolvers = {
  Query: {
    pokedex: () => pokedex,
    pokemonById(parent, args, contextValue, info) {
      const result = pokedex.find((pokemon) => pokemon.id === args.id);
      return result;
    },
    pokemonByIds(parent, args, contextValue, info) {
      const result = pokedex.filter((pokemon) => args.ids.includes(pokemon.id));
      return result;
    },
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
