import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioForm } from '../../../components/usuario/usuario.form';
import { Usuario } from '../../../model/usuario';
import { listaUsuarios } from '../../../model/listaUsuarios';

@Component({
  imports: [UsuarioForm],
  selector: 'app-crear-usuarios',
  styleUrl: './crear-usuarios.page.css',
  templateUrl: './crear-usuarios.page.html',
})
export class CrearUsuariosPage {
  private router = inject(Router);

  public onGuardarUsuario(usuario: Usuario) {
    const nuevoId = Math.max(0, ...listaUsuarios.map((u) => u.id_usuario)) + 1;
    listaUsuarios.push({ ...usuario, id_usuario: nuevoId });
    this.router.navigate(['/usuarios']);
  }
}
