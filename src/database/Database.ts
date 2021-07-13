import { Sequelize } from 'sequelize';

class Database {
    public dbClient;
    constructor() {
        this.dbClient = new Sequelize(process.env.DATABASE_URL, {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        });
    }
}

export default new Database();
