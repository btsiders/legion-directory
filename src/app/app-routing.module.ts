import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
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
  {
    path: 'garrisons',
    loadChildren: () => import('./pages/garrisons/garrisons.module').then( m => m.GarrisonsPageModule)
  },
  {
    path: 'garrisons/:id',
    loadChildren: () => import('./pages/garrison/garrison.module').then( m => m.GarrisonPageModule)
  },
  {
    path: 'member/:id',
    loadChildren: () => import('./pages/member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
