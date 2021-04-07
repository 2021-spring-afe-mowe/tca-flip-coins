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

  //win with Quarter

  get albertWinQuarter() {
    const myQuarterWins = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "quarter"
      ).length;
    return myQuarterWins;
  }



  get albertWinHeadQuarter() {
    const myHeadWins = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "quarter" && x.albertCalled == "heads"
      ).length;
    return myHeadWins;
  }
  

  get albertWinTailQuarter() {
    const myQuarterTailWins = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "quarter" && x.albertCalled == "tails"
      ).length;
    return myQuarterTailWins;
  }


  //Loose with quarter

  get albertLooseQuarter() {
    const myQuarterlooses = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "quarter"
      ).length;
    return myQuarterlooses;
  }

  get albertLooseHeadQuarter() {
    const myHeadlooses = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "quarter" && x.albertCalled == "heads"
      ).length;
    return myHeadlooses;
  }

  get albertLooseTailQuarter() {
    const myQuarterTailLooses = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "quarter" && x.albertCalled == "tails"
      ).length;
    return myQuarterTailLooses;
  }

   //win with Nickel

  get albertWinNickel() {
    const myNickelWins = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "nickel"
      ).length;
    return myNickelWins;
  }

  get albertWinHeadNickel() {
    const myNikelHeadWins = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "nickel" && x.albertCalled == "heads"
      ).length;
    return myNikelHeadWins;
  }

  get albertWinTailNickel() {
    const myNickelTailWins = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "nickel" && x.albertCalled == "tails"
      ).length;
    return myNickelTailWins;
  }

  //Loose with Nickel

  get albertLooseNickel() {
    const myNickelLooses = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "nickel" 
      ).length;
    return myNickelLooses;
  }

  get albertLooseHeadNickel() {
    const myNickelHeadLooses = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "nickel" && x.albertCalled == "heads"
      ).length;
    return myNickelHeadLooses;
  }

  get albertLooseTailNickel() {
    const myNickelTailLooses = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "nickel" && x.albertCalled == "tails"
      ).length;
    return myNickelTailLooses;
  }

  //coins used

  get albertCoinsUsed() {
    const mytotalCoinsUsed = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertCoin == "nickel" || x.albertCoin == "quarter"  && x.albertResult == "L" || x.albertResult == "W"
      ).length;
    return mytotalCoinsUsed;
  
  }

  get albertQuarterUsed() {
    const myQuarterCoinsUsed = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertCoin == "quarter"  && x.albertResult == "L" || x.albertResult == "W"
      ).length;
    return myQuarterCoinsUsed;
  }

  get albertNickelUsed() {
    const myNickelCoinsUsed = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertCoin == "nickel"  && x.albertResult == "L" || x.albertResult == "W"
      ).length;
    return myNickelCoinsUsed;
  }


  

}
