import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { NewTeamInput, Team } from '../models/Team.model';
import TeamService from '../services/Team.service';

@Resolver(Team)
export class TeamResolver {
    @Query(() => [Team])
    teams(): Promise<Team[]> {
        return TeamService.getAllTeams();
    }

    @Mutation(() => Team)
    async addTeam(@Arg('newTeam') newTeam: NewTeamInput): Promise<Team> {
        return TeamService.addTeam(newTeam);
    }
}
