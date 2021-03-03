import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePlayedPageRoutingModule } from './game-played-routing.module';

import { GamePlayedPage } from './game-played.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePlayedPageRoutingModule
  ],
  declarations: [GamePlayedPage]
})
export class GamePlayedPageModule {}
