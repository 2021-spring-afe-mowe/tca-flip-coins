import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TcaFlipCoinsService } from '../tca-flip-coins.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

 

  public form = [
    { val: 'Albert calls HEAD', isChecked: false },
    { val: 'Albert calls TAIL', isChecked: true },
    { val: 'OPPONENT calls HEAD', isChecked: true },
    { val: 'OPPONENT calls TAIL', isChecked: false }
  ];
  constructor(
    private routerSvc: Router
    , public tcaFlipCoins: TcaFlipCoinsService 
  ) {}
  
  gamePlayed() {
    this.tcaFlipCoins.gameResults = [
      ...this.tcaFlipCoins.gameResults
    
    //Add a new game result based on what just happen 
      //when you flipped the coin
      ,{
        albertCalled: this.tcaFlipCoins.albertCalled
        , albertCoin: this.tcaFlipCoins.albertCoin
        , albertResult: "" 
      }
    ];
    this.routerSvc.navigateByUrl("/record-result");
  }
  


}

