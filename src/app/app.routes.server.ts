import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'usuarios/create',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'usuarios/:id_usuario',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
