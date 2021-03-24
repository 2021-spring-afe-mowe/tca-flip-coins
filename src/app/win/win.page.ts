import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcaFlipCoinsService } from '../tca-flip-coins.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.page.html',
  styleUrls: ['./win.page.scss'],
})
export class WinPage implements OnInit {

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

}
