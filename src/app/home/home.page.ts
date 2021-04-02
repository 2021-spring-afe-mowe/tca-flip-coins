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
    this.tcaFlipCoins.gameResult = [
      ...this.tcaFlipCoins.gameResult
    
    ,"win"
    ];
    this.routerSvc.navigateByUrl("/record-result");
  }
  
  showNumberOfHead() {
    this.tcaFlipCoins.whatCalled = [
      ...this.tcaFlipCoins.whatCalled
    
    ,"H"
    ];
  }
  
  showAlbertNumberOfTail() {
    this.tcaFlipCoins.whatCalled = [
      ...this.tcaFlipCoins.whatCalled
  
      ,"T"
    ];
  }
  
  showNumberOfQuarter() {
    this.tcaFlipCoins.coins = [
      ...this.tcaFlipCoins.coins
    ,"Q"
    ];
  }

  showNumberOfNickel() { 
    this.tcaFlipCoins.coins = [
      ...this.tcaFlipCoins.coins
    ,"N"
    ];
  }

}

