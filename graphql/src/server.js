import './env';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4000;

// Create GraphQL Server with schema ({ typeDefs, resolvers })
const server = new GraphQLServer({ schema });

// Middlewares
server.express.use(logger('dev'));

server.start({ port: PORT }, () => console.log(`✅  Server running on http://localhost:${PORT}`));
