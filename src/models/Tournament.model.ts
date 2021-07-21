import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Tournament extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    @Field()
    torunamentName: string;

    @Column()
    @Field()
    startDate: string;

    @Column()
    @Field()
    endDate: string;
}
