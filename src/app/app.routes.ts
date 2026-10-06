import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';


export const routes: Routes = [
  //Eager loading
  {
    path:'',
    redirectTo: 'home',
    pathMatch: "full",
  },

  {
    path:'home',
    title:'Home',
    component:HomePage,
  },


  //Lazy loading
  {
    path:"usuarios",
    title:"usuarios",
    loadComponent: async () => {
      const module = await import('./pages/usuarios/listar-usuarios/listar-usuarios.page');
      return module.ListarUsuariosPage;
    }
  },

  {
    path:"usuarios/create",
    title:"crear usuario",
    loadComponent: async () => {
      const module = await import('./pages/usuarios/crear-usuarios/crear-usuarios.page');
      return module.CrearUsuariosPage;
    }
  },

  {
    path:'tareas',
    loadChildren: () => import ("./tareas.routes")
  },

  //Not found (siempre al final)
  {
    path:'**',
    title:'No encontrado',
    loadComponent: async () => {
      const module = await import('./pages/not-found/not-found.page');
      return module.NotFoundPage;
    }
  }
];
