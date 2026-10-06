import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioForm } from '../../../components/usuario/usuario.form';
import { Usuario } from '../../../model/usuario';
import { listaUsuarios } from '../../../model/listaUsuarios';

@Component({
  imports: [UsuarioForm],
  selector: 'app-editar-usuarios',
  styleUrl: './editar-usuarios.page.css',
  templateUrl: './editar-usuarios.page.html',
})
export class EditarUsuariosPage {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private id_usuario = Number(this.route.snapshot.paramMap.get('id_usuario'));
  public usuario = listaUsuarios.find((u) => u.id_usuario === this.id_usuario);

  public onGuardarUsuario(usuario: Usuario) {
    const index = listaUsuarios.findIndex((u) => u.id_usuario === this.id_usuario);
    if (index !== -1) {
      listaUsuarios[index] = { ...usuario, id_usuario: this.id_usuario };
    }
    this.router.navigate(['/usuarios']);
  }
}
