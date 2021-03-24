import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordResultPageRoutingModule } from './record-result-routing.module';

import { RecordResultPage } from './record-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordResultPageRoutingModule
  ],
  declarations: [RecordResultPage]
})
export class RecordResultPageModule {}
