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

  //win percents with quarter

  get quarterHeadWinningPercentage() {
    const myQuarterWinsPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "quarter" && x.albertCalled == "heads"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return myQuarterWinsPercent;
  }

  get quarterTailWinningPercentage() {
    const myTailWinsPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "quarter" && x.albertCalled == "tails"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return myTailWinsPercent;
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

  //loose percents with quarter

  get quarterHeadLoosingPercentage() {
    const myQuarterHeadWinsPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "quarter" && x.albertCalled == "heads"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return myQuarterHeadWinsPercent;
  }

  get quarterTailLoosingPercentage() {
    const myQuarterTailWinsPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "quarter" && x.albertCalled == "tails"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return myQuarterTailWinsPercent;
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

  //win percents with Nickel

  get nickelHeadWinningPercentage() {
    const myNickelWinsPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "nickel" && x.albertCalled == "heads"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return myNickelWinsPercent;
  }

  get nickelTailWinningPercentage() {
    const myNickelTailWinsPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "W" && x.albertCoin == "nickel" && x.albertCalled == "tails"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return myNickelTailWinsPercent;
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

  //loose percents with Nickel

  get nickelHeadLoosingPercentage() {
    const mynickelHeadLoosesPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "nickel" && x.albertCalled == "heads"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return mynickelHeadLoosesPercent;
  }

  get nickelTailLoosingPercentage() {
    const mynickelTailLoosesPercent = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertResult == "L" && x.albertCoin == "nickel" && x.albertCalled == "tails"
      ).length / this.myTcaFlipCoinsSvc.gameResults.length;
    return mynickelTailLoosesPercent;
  }

  //coins used

  get albertCoinsUsed() {
    const mytotalCoinsUsed = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertCoin == "nickel" || x.albertCoin == "quarter"  
      ).length;
    return mytotalCoinsUsed;
  
  }

  get albertQuarterUsed() {
    const myQuarterCoinsUsed = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertCoin == "quarter"  
      ).length;
    return myQuarterCoinsUsed;
  }

  get albertNickelUsed() {
    const myNickelCoinsUsed = this.myTcaFlipCoinsSvc.gameResults.filter(
      x => x.albertCoin == "nickel"
      ).length;
    return myNickelCoinsUsed;
  }


  

}
