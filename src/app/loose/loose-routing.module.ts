import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoosePage } from './loose.page';

const routes: Routes = [
  {
    path: '',
    component: LoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoosePageRoutingModule {}
