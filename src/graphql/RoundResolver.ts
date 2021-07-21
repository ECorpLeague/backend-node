//Create Round resolver

import { Mutation, Query, Resolver } from 'type-graphql';
import { Round } from '../models/Round.model';
import RoundService from '../services/Round.service';

@Resolver(Round)
export class RoundResolver {
    @Query(() => [Round])
    public async getRounds(): Promise<Round[]> {
        return await RoundService.getAllRounds();
    }

    //TODO: add round arguments
    @Mutation(() => Round)
    public async createRound(): Promise<Round> {
        return RoundService.createRound();
    }
}
