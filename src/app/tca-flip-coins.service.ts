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

  gameResults: GameResult[] = [];

  albertCalled = "head";
  albertCoin = "quarter";

  // gameResult = [];
  // players = [];
  // coins = [];
  // whoCalled = [];
  // whatCalled = [];

  
  
}
