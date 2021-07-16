import { NewTeamInput, Team } from '../models/Team.model';
import logger from '../util/logger';

export default class TeamService {
    static async addTeam(newTeam: NewTeamInput): Promise<Team> {
        const createdTeam = Team.create({ name: newTeam.name });
        const result = await createdTeam.save();
        logger.info(`[API] Added new Team id: `);

        return result;
    }

    static async getAllTeams(): Promise<Team[]> {
        const teams = await Team.find();
        return teams;
    }
}
