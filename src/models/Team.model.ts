import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class Team {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    age?: number;
}

@InputType()
export class NewTeamInput {
    @Field()
    name: string;
}
