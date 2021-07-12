import { ApolloServer } from 'apollo-server-express';
import errorHandler from 'errorhandler';
import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';

import { buildSchema } from 'type-graphql';
import { TeamResolver } from './graphql/TeamResolver';
import { dbClient } from './config/db.config';
import { Team } from './models/Team.model';

async function bootstrap() {
    /**
     * Error Handler. Provides full stack
     */
    if (process.env.NODE_ENV === 'development') {
        app.use(errorHandler());
    }

    //TODO: move to db init
    try {
        await dbClient.authenticate();
        console.log('Connection has been established successfully.');
        Team.sync();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    const schema = await buildSchema({
        resolvers: [TeamResolver]
    });
    const apolloServer = new ApolloServer({ schema });
    apolloServer.applyMiddleware({ app });

    /**
     * Start Express server.
     */
    app.listen(app.get('port'), () => {
        console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
        console.log(`GraphQL is running at http://localhost:${app.get('port')}${apolloServer.graphqlPath}`);
        console.log('  Press CTRL-C to stop\n');
    });
}

bootstrap();
