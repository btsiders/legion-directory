import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'garrisons',
    loadChildren: () => import('./pages/garrisons/garrisons.module').then( m => m.GarrisonsPageModule)
  },
  {
    path: 'detachments',
    loadChildren: () => import('./pages/detachments/detachments.module').then( m => m.DetachmentsPageModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./pages/members/members.module').then( m => m.MembersPageModule)
  },
  // {
  //   path: ':id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
