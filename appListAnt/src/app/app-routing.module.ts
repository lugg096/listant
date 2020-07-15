import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tap-principal/tap-principal.module').then( m => m.TapPrincipalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listuser',
    loadChildren: () => import('./pages/listuser/listuser.module').then( m => m.ListuserPageModule)
  },
  {
    path: 'tap-principal',
    loadChildren: () => import('./pages/tap-principal/tap-principal.module').then( m => m.TapPrincipalPageModule)
  },
  {
    path: 'producto-detalle',
    loadChildren: () => import('./pages/producto-detalle/producto-detalle.module').then( m => m.ProductoDetallePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'crear-lista',
    loadChildren: () => import('./pages/crear-lista/crear-lista.module').then( m => m.CrearListaPageModule)
  },
/*   {
    path: 'search-groups',
    loadChildren: () => import('./pages/search-groups/search-groups.module').then( m => m.SearchGroupsPageModule)
  }, */
/*   {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
