import { Team } from '../models/Team.model';

export const resolvers = {
    Query: {
        getTeam: (): Team[] => {
            const teams: Team[] = [
                { id: '1', name: 'AA' },
                { id: '', name: 'BB' }
            ];
            return teams;
        }
    }
};
