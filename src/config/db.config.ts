import { Sequelize } from 'sequelize';

export const dbClient = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    }
});
