import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Game extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstTeam: string;
    @Field()
    @Column()
    secondTeam: string;
    @Field()
    @Column()
    bo: string;
}
