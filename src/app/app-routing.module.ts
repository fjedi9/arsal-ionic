import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SigninPage } from './signin/signin.page';

const routes: Routes = [
  
  { path: '', component: SigninPage },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'transporte', loadChildren: './transporte/transporte.module#TransportePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
