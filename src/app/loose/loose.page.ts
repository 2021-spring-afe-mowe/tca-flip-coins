import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loose',
  templateUrl: './loose.page.html',
  styleUrls: ['./loose.page.scss'],
})
export class LoosePage implements OnInit {

  constructor(
    private router: Router
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
