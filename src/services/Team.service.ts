import { NewTeamInput, Team } from '../models/Team.model';
import logger from '../util/logger';

export default class TeamService {
    static async addTeam(newTeam: NewTeamInput): Promise<Team> {
        const createdTeam = Team.build({ name: newTeam.name });
        const result = await createdTeam.save();
        logger.info(`[API] Added new Team id: ${result.get().id}`);

        return createdTeam;
    }

    static async getAllTeams(): Promise<Team[]> {
        const teams = await Team.findAll();
        return teams;
    }

    static async getTeamById(id: number): Promise<Team> {
        return Team.findByPk(id);
    }
}
