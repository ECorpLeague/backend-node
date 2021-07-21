import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './Game.model';

@ObjectType()
@Entity()
export class Round extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field()
    @Column()
    type: string;

    @Field(() => [Game])
    @OneToMany(() => Game, (game) => game.round, { eager: true })
    games: Game[];
}
