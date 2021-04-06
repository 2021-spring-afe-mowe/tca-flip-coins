import { Injectable } from '@angular/core';

interface GameResult {
  albertCalled: string;
  albertCoin: string;
  albertResult: string;
}
@Injectable({
  providedIn: 'root'
})
export class TcaFlipCoinsService {

  constructor() { }

  // Array of game result objects.
  gameResults: GameResult[] = [];

  // Temporary properties used to share data
  // between the home page and the record-result page.
  albertCalled = "head";
  albertCoin = "quarter";

  //
  // Unneccesary properties ? ? ?
  //
  gameResult = [];
  players = [];
  coins = [];
  whoCalled = [];
  whatCalled = [];
  
  albertFirstChoice = "won";

  albertCalledHeadWin = "H";
  albertCalledHeadLost = "h";

  albertCalledTailWin = "T";
  albertCalledTailLost = "t";
  
}
