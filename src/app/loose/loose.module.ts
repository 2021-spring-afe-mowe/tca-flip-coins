import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoosePageRoutingModule } from './loose-routing.module';

import { LoosePage } from './loose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoosePageRoutingModule
  ],
  declarations: [LoosePage]
})
export class LoosePageModule {}
