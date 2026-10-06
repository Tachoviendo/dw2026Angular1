import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Usuario } from "../../../model/usuario";
import { listaUsuarios } from "../../../model/listaUsuarios";

@Component({
  imports: [RouterLink],
  selector: 'app-listar-usuarios',
  styleUrl: './listar-usuarios.page.css',
  templateUrl: './listar-usuarios.page.html',
})
export class ListarUsuariosPage {
  public usuarios = signal<Usuario[]>([...listaUsuarios]);

  public eliminarUsuario(id_usuario: number) {
    const index = listaUsuarios.findIndex((u) => u.id_usuario === id_usuario);
    if (index !== -1) {
      listaUsuarios.splice(index, 1);
    }
    this.usuarios.set([...listaUsuarios]);
  }
}
