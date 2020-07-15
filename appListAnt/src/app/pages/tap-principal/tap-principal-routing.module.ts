import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TapPrincipalPage } from './tap-principal.page';

const routes: Routes = [
  {
    path: '',
    component: TapPrincipalPage,
    children: [
      {
        path: 'listgroup',
        loadChildren: () => import('../listgroup/listgroup.module').then(m => m.ListgroupPageModule)
      },
      {
        path: 'search-groups',
        loadChildren: () => import('../search-groups/search-groups.module').then(m => m.SearchGroupsPageModule)
      } ,
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },

      {
        path: 'crear-lista',
        loadChildren: () => import('../crear-lista/crear-lista.module').then(m => m.CrearListaPageModule)
      },
      
      
      /*
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      }, */
      {
        path: '',
        redirectTo: '/tap-principal/listgroup',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tap-principal/listgroup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TapPrincipalPageRoutingModule {}
