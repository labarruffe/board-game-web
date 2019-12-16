import { Rule } from './rule';
import { BoardGame } from './boardGame';
import { Player } from './player';

export class Square {
    id: number;
    boardGameId: number;
    rule: Rule;
    players: Player[];
    boardGame: BoardGame;

    constructor(rule?: Rule, boarGameId = 1) {
        this.rule = rule;
        this.boardGameId = boarGameId;
        this.players = [];
    }
}