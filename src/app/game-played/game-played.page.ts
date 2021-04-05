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
  

  Previous(){
    this.router.navigateByUrl("/record-result");
  }

  
  playAgain() {
    this.router.navigateByUrl("/");
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

  get numberOfHead() {
    return this.myTcaFlipCoinsSvc.whatCalled.filter(x => x == "H").length
    ;
  }

  get numberOfTail() {
    return this.myTcaFlipCoinsSvc.whatCalled.filter(x => x == "T").length
    ;
  }

  get numberOfQuarter() {
    return this.myTcaFlipCoinsSvc.coins.filter(x => x == "Q").length
    ;
  }

  get numberOfNickel() {
    return this.myTcaFlipCoinsSvc.coins.filter(x => x == "N").length
    ;
  }

}
