import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { BoardGame } from 'src/app/models/boardGame';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardGame: BoardGame;

  constructor(
    public boardService: BoardService,
  ) { }

  ngOnInit() {
  }

  startBoardGame() {
    this.buildBoardGame();
    this.buildSquares(20);
  }

  private buildBoardGame() {
    this.boardService.CreateBoardGame(new BoardGame()).subscribe(
      (data) => {
        this.boardGame = data;
      },
      (error) => {
        console.log('buildBoardGame: ', error);
      }
    );
  }

  private buildSquares(numberOfSquares: number) {
    for (let index = 1; index <= numberOfSquares; index++) {
      this.boardService.createSquare(new Square()).subscribe(
        (data) => {
          this.boardGame.squares.push(data);
        },
        (error) => {
          console.log('buildSquares: ', error);
        }
      );
    }
  }

  getPlayers() {
    this.boardService.getBoardGame().subscribe(
      (data) => {
        if (data.participants.length > 0) {
          for (const participant of data.participants) {
            this.boardGame.participants.push(participant);
          }
        } else {
          console.log('Participants of board game are empty!');
        }
      },
      (error) => {
        console.log('getPlayers: ', error);
      }
    );
  }
}
