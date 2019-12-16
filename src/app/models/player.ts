import { Square } from './square';
import { BoardGame } from './boardGame';

export class Player {
    id: number;
    squareId: number;
    BoardGameId: number;
    name: string;
    color: string;
    square: Square;
    boardGame: BoardGame;
}