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

  // get winningPercentage() {
  //   return this.myTcaFlipCoinsSvc.gameResults.filter(x => x == "W").length
  //   / this.myTcaFlipCoinsSvc.gameResults.length
  //   ;
  // }

  // get loosingPercentage() {
  //   return this.myTcaFlipCoinsSvc.gameResults.filter(x => x == "L").length
  //   / this.myTcaFlipCoinsSvc.gameResults.length
  //   ;
  // }
  lostGame(){
    this.myTcaFlipCoinsSvc.gameResults = [
      //spread in all the previous game result
      ...this.myTcaFlipCoinsSvc.gameResults

      //Add a new game result based on what just happen 
      //when you flipped the coin
    ,{
      albertCalled: this.myTcaFlipCoinsSvc.albertCalled
      , albertCoin: this.myTcaFlipCoinsSvc.albertCoin
      , albertResult: "L" 
    }
    ];
    
  }

  wonGame(){
    this.myTcaFlipCoinsSvc.gameResults = [
      //spread in all the previous game result
      ...this.myTcaFlipCoinsSvc.gameResults

      //Add a new game result based on what just happen 
      //when you flipped the coin
    ,{
      albertCalled: this.myTcaFlipCoinsSvc.albertCalled
      , albertCoin: this.myTcaFlipCoinsSvc.albertCoin
      , albertResult: "W" 
    }
  
    ];
    
  }

  



}
