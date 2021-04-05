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
    this.sharedDataService.gameResult = [
      ...this.sharedDataService.gameResult
    ,"L"
    ];
    this.routerSvc.navigateByUrl("/game-played");
  }

  wonGame(){
    this.sharedDataService.gameResult = [
      ...this.sharedDataService.gameResult
    ,"w"
    ];
    this.routerSvc.navigateByUrl("/game-played");
  }

}
