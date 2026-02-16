import { Rol } from "./rol.model";

export class Usuario {
  idUsuario!: number | null;
  nombre!: string;
  app!: string;
  apm!: string;
  sexo!: string;
  correo!: string;
  fechaNacimiento!: string;
  fechaCreacion!: string;
  rol!: Rol;
}
