const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
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
            context: () => ({ db }),
            // permitir introspección en producción y usar Playground
            introspection: true,
            plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
        });

        //Inicializar Apollo antes de aplicar el middleware
        await server.start();
        server.applyMiddleware({ app });

        // redirigir raíz a /graphql para facilitar acceso
        app.get('/', (_req, res) => res.redirect('/graphql'));

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
}

start();





