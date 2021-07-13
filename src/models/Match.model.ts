import { DataTypes, Model, Optional } from 'sequelize';
import { Team } from './Team.model';
import { ObjectType } from 'type-graphql';
import Database from '../database/Database';

enum BEST_OF {
    BO_3 = 'BO_3',
    BO_5 = 'BO_5'
}

interface MatchAttributes {
    id: number;
    firstTeam: Team;
    secondTeam: Team;
    bo: BEST_OF;
}

type CreationMatchAttributes = Optional<MatchAttributes, 'id'>;

@ObjectType()
export class Match extends Model<MatchAttributes, CreationMatchAttributes> {
    id: number;
    firstTeam: Team;
    secondTeam: Team;

    bo: BEST_OF;
}

Match.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstTeam: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        secondTeam: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: Database.dbClient,
        tableName: 'matches'
    }
);
