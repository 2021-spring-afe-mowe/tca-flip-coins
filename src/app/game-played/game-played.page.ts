import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-game-played',
  templateUrl: './game-played.page.html',
  styleUrls: ['./game-played.page.scss'],
})
export class GamePlayedPage implements OnInit {



  constructor(
    private router: Router
  ) { 
   

  }

  ngOnInit() {
  }
  wonGame(){
    this.router.navigateByUrl("/");
  }

  lostGame(){
    this.router.navigateByUrl("/");
  }

}
