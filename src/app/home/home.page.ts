import { Component } from '@angular/core';
import { Router } from '@angular/router';



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
  ) {}
  
  gamePlayed() {
    this.routerSvc.navigateByUrl("/game-played");
  }
  
  showNumberOfHead() {
    
  }
  
  showAlbertNumberOfTail() {
    
  }
  
  showNumberOfQuarter() {
    
  }

  showNumberOfNickel() { 
    
  }

}

