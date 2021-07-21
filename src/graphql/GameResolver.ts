import { Query, Resolver } from 'type-graphql';
import { Game } from '../models/Game.model';

@Resolver(Game)
export class GameResolver {
    @Query(() => [Game])
    games(): Promise<Game[]> {
        return Game.find();
    }
}
