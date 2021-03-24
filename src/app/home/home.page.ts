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
    this.routerSvc.navigateByUrl("/game-played");
  }
  
  showNumberOfHead() {
    this.tcaFlipCoins.gameResult = [
      ...this.tcaFlipCoins.gameResult
    ,"W"
    ,"H"
    ];
  }
  
  showAlbertNumberOfTail() {
    this.tcaFlipCoins.gameResult = [
      ...this.tcaFlipCoins.gameResult
      ,"L"
      ,"T"
    ];
  }
  
  showNumberOfQuarter() {
    this.tcaFlipCoins.gameResult = [
      ...this.tcaFlipCoins.gameResult
    ,"Q"
    ];
  }

  showNumberOfNickel() { 
    this.tcaFlipCoins.gameResult = [
      ...this.tcaFlipCoins.gameResult
    ,"N"
    ];
  }

}

