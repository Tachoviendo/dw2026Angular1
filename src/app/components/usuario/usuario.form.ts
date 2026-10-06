import { Component, signal, output } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { Usuario } from '../../model/usuario';
import { JsonPipe } from '@angular/common'


@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-usuario-form',
  styleUrl: './usuario.form.css',
  templateUrl: './usuario.form.html',
})
export class UsuarioForm {
  public usuarioModel = signal<Usuario>({
    id_usuario:0,
    nombre: '',
    apellido: '',
    username: '',
  })

  public usuarioForm= form(this.usuarioModel);

  public guardarUsuario = output<Usuario>()

  public guardar(event: Event) {
    event.preventDefault();
    console.log(this.usuarioModel());
    this.guardarUsuario.emit(this.usuarioForm().value());
  }

}
