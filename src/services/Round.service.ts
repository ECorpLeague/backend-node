import { Game } from '../models/Game.model';
import { Round } from '../models/Round.model';

export default class RoundService {
    //get all rounds
    static getAllRounds(): Promise<Round[]> {
        return Round.find();
    }

    //TODO: create round base on arguments
    static async createRound(): Promise<Round> {
        const newGame = new Game();
        newGame.firstTeam = 'FirstTeam';
        newGame.secondTeam = 'SecondTeam';
        newGame.bo = 'PO1';

        const game = await Game.create(newGame).save();

        const newRound = new Round();
        newRound.games = [game];
        newRound.type = '1';
        return Round.create(newRound).save();
    }
}
