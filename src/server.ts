import { ApolloServer } from 'apollo-server-express';
import errorHandler from 'errorhandler';
import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';

import { buildSchema } from 'type-graphql';
import { TeamResolver } from './graphql/TeamResolver';
import { initDB } from './config/db.config';
import { GameResolver } from './graphql/GameResolver';
import { RoundResolver } from './graphql/RoundResolver';
import logger from './util/logger';

async function bootstrap() {
    /**
     * Error Handler. Provides full stack
     */
    if (process.env.NODE_ENV === 'development') {
        app.use(errorHandler());
    }
    await initDB();
    const schema = await buildSchema({
        resolvers: [TeamResolver, GameResolver, RoundResolver]
    });
    const apolloServer = new ApolloServer({ schema });
    apolloServer.applyMiddleware({ app });

    /**
     * Start Express server.
     */
    app.listen(app.get('port'), () => {
        logger.info(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
        logger.info(`GraphQL is running at http://localhost:${app.get('port')}${apolloServer.graphqlPath}`);
    });
}

bootstrap();
