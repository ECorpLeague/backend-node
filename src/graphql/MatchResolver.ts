import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Match } from '../models/Match.model.';

@Resolver(Match)
export class MatchResolver {
    @Query(() => [Match])
    matches(): Promise<Match[]> {
        return Match.find();
    }
}
