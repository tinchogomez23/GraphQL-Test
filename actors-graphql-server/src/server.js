const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const resolvers = require('./resolvers');
const db = require('./db/database');

const app = express();
const PORT = process.env.PORT || 4000;

async function start(){
    try{
        const server = new ApolloServer({
            typeDefs: schema,
            resolvers,
            context: () => ({ db })
        });

        //Inicializar Apollo antes de aplicar el middleware
        await server.start();
        server.applyMiddleware({ app });

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
}

start();





