import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Round } from './Round.model';

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

    @Field(() => Round)
    @ManyToOne(() => Round, (r) => r.games)
    round: Round;
}
