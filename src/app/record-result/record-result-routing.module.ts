import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordResultPage } from './record-result.page';

const routes: Routes = [
  {
    path: '',
    component: RecordResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordResultPageRoutingModule {}
