import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { NewTeamInput, Team } from '../models/Team.model';
import logger from '../util/logger';

@Resolver(Team)
export class TeamResolver {
    teamsArray: Team[] = [
        { id: '1', name: 'AA' },
        { id: '2', name: 'BB' }
    ];

    @Query(() => [Team])
    teams(): Team[] {
        return this.teamsArray;
    }

    @Query(() => Team)
    team(@Arg('id') id: string): Team {
        return this.teamsArray.find((t) => t.id == id);
    }

    @Mutation(() => [Team])
    addTeam(@Arg('newTeam') newTeam: NewTeamInput): Team[] {
        this.teamsArray.push({
            id: `${this.teamsArray.length + 1}`,
            name: newTeam.name
        });
        logger.info(`[API] Added new Team id: ${this.teamsArray[this.teamsArray.length - 1].id}`);
        return this.teamsArray;
    }
}
