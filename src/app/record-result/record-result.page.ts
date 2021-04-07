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
      //spread in all the previous game result
      ...this.sharedDataService.gameResults

      //Add a new game result based on what just happen 
      //when you flipped the coin
    ,{
      albertCalled: this.sharedDataService.albertCalled
      , albertCoin: this.sharedDataService.albertCoin
      , albertResult: "L" 
    }
    ];
    this.routerSvc.navigateByUrl("/game-played");
  }

  wonGame(){
    this.sharedDataService.gameResults = [
      //spread in all the previous game result
      ...this.sharedDataService.gameResults

      //Add a new game result based on what just happen 
      //when you flipped the coin
    ,{
      albertCalled: this.sharedDataService.albertCalled
      , albertCoin: this.sharedDataService.albertCoin
      , albertResult: "W" 
    }
  
    ];
    this.routerSvc.navigateByUrl("/game-played");
  }

}
