import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcaFlipCoinsService } from '../tca-flip-coins.service';

@Component({
  selector: 'app-loose',
  templateUrl: './loose.page.html',
  styleUrls: ['./loose.page.scss'],
})
export class LoosePage implements OnInit {

  constructor(
    private router: Router
    , public tcaFlipCoins: TcaFlipCoinsService
  ) { }

  ngOnInit() {
  }

  playAgain() {
    this.router.navigateByUrl("/");
  }

  quit() {
    this.router.navigateByUrl("/game-played");
  }

  get winningPercentage() {
    return this.tcaFlipCoins.gameResult.filter(x => x == "W").length
    / this.tcaFlipCoins.gameResult.length
    ;
  }

  get loosingPercentage() {
    return this.tcaFlipCoins.gameResult.filter(x => x == "L").length
    / this.tcaFlipCoins.gameResult.length
    ;
  }

}
