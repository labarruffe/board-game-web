import { MovementTypeEnum } from './movementTypeEnum';
import { Square } from './square';
import { RandomString } from '../utils/randomString';
import { RandomNumber } from '../utils/randomNumber';

export class Rule {
  id: number;
  squareId: number;
  title: string = RandomString();
  description: string = RandomString();
  numberOfSquares: number = RandomNumber(1, 5);
  movementType: MovementTypeEnum = RandomNumber(0, 3);
  square: Square;

  constructor(title: string, description: string, numberOfSquares: number, movementType: MovementTypeEnum) {
    this.title = title;
    this.description = description;
    this.numberOfSquares = numberOfSquares;
    this.movementType = movementType;
  }
}
