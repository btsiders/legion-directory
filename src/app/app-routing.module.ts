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
    path: 'detachments/:id',
    loadChildren: () => import('./pages/detachment/detachment.module').then( m => m.DetachmentPageModule)
  },
  {
    path: 'detachments/:id/members',
    loadChildren: () => import('./pages/detachment-members/detachment-members.module').then( m => m.DetachmentMembersPageModule)
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
