import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePlayedPage } from './game-played.page';

const routes: Routes = [
  {
    path: '',
    component: GamePlayedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePlayedPageRoutingModule {}
