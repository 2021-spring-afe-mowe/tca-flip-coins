import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-game-played',
  templateUrl: './game-played.page.html',
  styleUrls: ['./game-played.page.scss'],
})
export class GamePlayedPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.user
      }
    });


  }

  ngOnInit() {
  }

}
