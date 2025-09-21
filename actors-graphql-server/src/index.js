import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { connectToDatabase } from './db/database.js';

const startServer = async () => {
    await connectToDatabase();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await server.listen();
    console.log(`🚀 Server ready at ${url}`);
};

startServer();