import { DataTypes, Model, Optional } from 'sequelize';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { dbClient } from '../config/db.config';

interface TeamAttributes {
    id: number;
    name: string;
    score?: number;
}

type CreationTeamAttributes = Optional<TeamAttributes, 'id'>;

@ObjectType()
export class Team extends Model<TeamAttributes, CreationTeamAttributes> {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    score?: number;
}

@InputType()
export class NewTeamInput {
    @Field()
    name: string;
}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: dbClient,
        tableName: 'teams'
    }
);
