import { Player } from './player';
import { Square } from './square';

export class BoardGame {
    id: number;
    round: number;
    diceSize: number;
    participants: Player[];
    squares: Square[];

    constructor(diceSize = 6) {
        this.diceSize = diceSize;
        this.round = 1;
        this.participants = [];
        this.squares = [];
    }
}