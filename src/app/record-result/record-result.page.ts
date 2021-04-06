import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcaFlipCoinsService } from '../tca-flip-coins.service';

@Component({
  selector: 'app-record-result',
  templateUrl: './record-result.page.html',
  styleUrls: ['./record-result.page.scss'],
})
export class RecordResultPage implements OnInit {

  constructor(
    private routerSvc: Router
    , public sharedDataService: TcaFlipCoinsService
  ) { }

  ngOnInit() {
  }
  
  playAgain(){
    this.routerSvc.navigateByUrl("/");
  }

  Stats(){
    this.routerSvc.navigateByUrl("/game-played");
  }

  lostGame(){
    this.sharedDataService.gameResults = [

      // Spread in all the previous game results.
      ...this.sharedDataService.gameResults

      // Add a new game result object based on what
      // just happened when you flipped the coin.
      ,{
        albertCalled: this.sharedDataService.albertCalled
        , albertCoin: this.sharedDataService.albertCoin
        , albertResult: "L"
      }
    ];

    this.routerSvc.navigateByUrl("/game-played");
  }

  wonGame(){

    // TODO: Save a proper game result object here ! ! !

    // this.sharedDataService.gameResult = [
    //   ...this.sharedDataService.gameResult
    // ,"w"
    // ];

    this.routerSvc.navigateByUrl("/game-played");
  }

}
