import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'game-played',
    loadChildren: () => import('./game-played/game-played.module').then( m => m.GamePlayedPageModule)
  },
  {
    path: 'record-result',
    loadChildren: () => import('./record-result/record-result.module').then( m => m.RecordResultPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      , { 
        preloadingStrategy: PreloadAllModules
      , useHash: true 
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
