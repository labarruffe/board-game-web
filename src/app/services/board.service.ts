import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from 'src/app/models/player';
import { BoardGame } from 'src/app/models/boardGame';
import { Square } from 'src/app/models/square';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardGameBaseUrl = 'http://localhost:5000/api';
  private boardGamePath = '/boardgame';
  private squarePath = '/squares';
  private rulePath = '/rules';
  private playerPath = '/players';

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * POST: BoardGame
   */
  CreateBoardGame(boardgame: BoardGame): Observable<BoardGame> {
    return this.http.post<BoardGame>(`${this.boardGameBaseUrl}${this.boardGamePath}`, boardgame, httpOptions);
  }

  /**
   * GET: All BoardGame
   */
  getBoardGame(): Observable<BoardGame> {
    console.log('aqui');
    return this.http.get<BoardGame>(`${this.boardGameBaseUrl}${this.boardGamePath}`)[0];
  }

  /**
   * POST: Square + Rule
   */
  createSquare(square: Square): Observable<Square> {
    return this.http.post<Square>(`${this.boardGameBaseUrl}${this.squarePath}`, square, httpOptions);
  }

  /**
   * POST: Player
   */
  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.boardGameBaseUrl}${this.playerPath}`, player, httpOptions);
  }
}
