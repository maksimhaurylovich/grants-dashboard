import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { GrantResolver } from './resolvers/GrantResolver';

async function startServer() {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [GrantResolver],
    });

    const server = new ApolloServer({ schema });

    server.listen({ port: 4000 }, () =>
        console.log(`Server running at http://localhost:4000`)
    );
}

startServer();