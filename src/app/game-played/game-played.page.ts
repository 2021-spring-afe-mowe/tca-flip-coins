import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcaFlipCoinsService } from '../tca-flip-coins.service';



@Component({
  selector: 'app-game-played',
  templateUrl: './game-played.page.html',
  styleUrls: ['./game-played.page.scss'],
})
export class GamePlayedPage implements OnInit {



  constructor(
    private router: Router
    , private myTcaFlipCoinsSvc: TcaFlipCoinsService
  ) { 
   

  }

  ngOnInit() {
  }
  wonGame(){
    this.myTcaFlipCoinsSvc.gameResult = [
      ...this.myTcaFlipCoinsSvc.gameResult
    ,"W"
    ];
    
    this.router.navigateByUrl("/win");
  }

  lostGame(){
    this.myTcaFlipCoinsSvc.gameResult = [
      ...this.myTcaFlipCoinsSvc.gameResult
    ,"L"
    ];
    this.router.navigateByUrl("/loose");
  }

  get winningPercentage() {
    return this.myTcaFlipCoinsSvc.gameResult.filter(x => x == "W").length
    / this.myTcaFlipCoinsSvc.gameResult.length
    ;
  }

  get loosingPercentage() {
    return this.myTcaFlipCoinsSvc.gameResult.filter(x => x == "L").length
    / this.myTcaFlipCoinsSvc.gameResult.length
    ;
  }

}
