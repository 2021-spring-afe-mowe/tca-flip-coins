import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcaFlipCoinsService {

  constructor() { }

  gameResult = [];
  players = [];
  coins = [];
  whoCalled = [];
  whatCalled = [];

  albertCalled = "head";
  albertCoins = "quarter";
  albertFirstChoice = "won";

  albertCalledHeadWin = "H";
  albertCalledHeadLost = "h";

  albertCalledTailWin = "T";
  albertCalledTailLost = "t";
  
}
