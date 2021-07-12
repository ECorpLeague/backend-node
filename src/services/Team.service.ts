import { NewTeamInput, Team } from '../models/Team.model';
import logger from '../util/logger';

export default class TeamService {
    static async addTeam(newTeam: NewTeamInput): Promise<Team> {
        const createdTeam = Team.build({ name: newTeam.name, score: 0 });
        const result = await createdTeam.save();
        console.log(result);
        logger.info(`[API] Added new Team id: ${createdTeam.name}`);

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
