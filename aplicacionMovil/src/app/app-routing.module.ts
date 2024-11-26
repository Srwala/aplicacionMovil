import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canactivateGuard } from './canactivate.guard'; // Ajusta la ruta
import { CandeactivateGuard } from './candeactivate.guard';

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
  { path: 'profesor-cursos', loadChildren: () => import('./vista-profesor/vista-profesor.module').then(m => m.VistaProfesorPageModule) },
  { path: 'lista-alumnos', loadChildren: () => import('./lista-profesor/lista-profesor.module').then(m => m.ListaProfesorPageModule) },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./api/api.module').then( m => m.ApiPageModule), canActivate: [canactivateGuard], canDeactivate: [CandeactivateGuard]
  },
  {
    path: 'recupera-clave',
    loadChildren: () => import('./recupera-clave/recupera-clave.module').then( m => m.RecuperaClavePageModule)
  },
  {
    path: 'cambia-clave',
    loadChildren: () => import('./cambia-clave/cambia-clave.module').then( m => m.CambiaClavePageModule)
  },
  {
    path: 'alumno-view',
    loadChildren: () => import('./alumno-view/alumno-view.module').then( m => m.AlumnoViewPageModule)
  },
  {
    path: 'vista-estudiante',
    loadChildren: () => import('./vista-estudiante/vista-estudiante.module').then( m => m.VistaEstudiantePageModule) , canActivate: [canactivateGuard], canDeactivate: [CandeactivateGuard]
  },
  {
    path: 'vista-profesor',
    loadChildren: () => import('./vista-profesor/vista-profesor.module').then( m => m.VistaProfesorPageModule) , canActivate: [canactivateGuard], canDeactivate: [CandeactivateGuard]
  },
  {
    path: 'lista-profesor',
    loadChildren: () => import('./lista-profesor/lista-profesor.module').then( m => m.ListaProfesorPageModule) , canActivate: [canactivateGuard], canDeactivate: [CandeactivateGuard]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
