import { Component } from '@angular/core';

import {Router, NavigationExtras} from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = [
    {
        gameResult: "W"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Quarter"
        , whoCalled: "Albert"
        , whatCalled: "Heads"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Quarter"
        , whoCalled: "Opponent"
        , whatCalled: "Heads"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Nickel"
        , whoCalled: "Albert"
        , whatCalled: "Tails"
    }
    , {
        gameResult: "W"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Nickel"
        , whoCalled: "Opponent"
        , whatCalled: "Tails"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Nickel"
        , whoCalled: "Opponent"
        , whatCalled: "Tails"
    }
    , {
        gameResult: "W"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Quarter"
        , whoCalled: "Albert"
        , whatCalled: "Heads"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Nickel"
        , whoCalled: "Albert"
        , whatCalled: "Tails"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Quarter"
        , whoCalled: "Opponent"
        , whatCalled: "Heads"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Nickel"
        , whoCalled: "Opponent"
        , whatCalled: "Tails"
    }
    , {
        gameResult: "L"
        , players: [
            "Albert"
            , "Opponent"
        ]
        , coin: "Nickel"
        , whoCalled: "Albert"
        , whatCalled: "Tails"
    }
];


  public form = [
    { val: 'Albert calls HEAD', isChecked: false },
    { val: 'Albert calls TAIL', isChecked: true },
    { val: 'OPPONENT calls HEAD', isChecked: true },
    { val: 'OPPONENT calls TAIL', isChecked: false }
  ];
  constructor(private router: Router) {}
  opengamePlayedWithState() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
        
      }
      
    };
    this.router.navigate(['game-played'], navigationExtras)
    console.log("clicked");
  }
  
  

}

