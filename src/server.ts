import { ApolloServer } from 'apollo-server-express';
import errorHandler from 'errorhandler';
import app from './app';

import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}
export const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log(`GraphQL is running at http://localhost:${app.get('port')}${apolloServer.graphqlPath}`);
    console.log('  Press CTRL-C to stop\n');
});

export default server;
