import { Routes } from '@angular/router';

export const tareasRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Tareas',
    loadComponent: async () =>
      (await import('./pages/tareas/listar-tareas/listar-tareas.page')).ListarTareasPage,
  },

  {
    path: 'create',
    title: 'Crear Tarea',
    loadComponent: async () =>
      import('./pages/tareas/crear-tareas/crear-tareas.page').then((m) => m.CrearTareasPage),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

export default tareasRoutes;
