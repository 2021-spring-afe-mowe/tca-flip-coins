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

  albertCalled = "heads";
  albertCoins = "quarter";
  albertFirstChoice = "won";
  
}
