import { Routes } from '@angular/router';

// Roles
import { ListarRol } from './Componentes/Rol/listar-rol/listar-rol';
import { GuardarRol } from './Componentes/Rol/guardar-rol/guardar-rol';
import { EditarRol } from './Componentes/Rol/editar-rol/editar-rol';

// Usuarios
import { ListarUsuarioComponent } from './Componentes/Usuario/listar-usuario/listar-usuario';
import { GuardarUsuarioComponent } from './Componentes/Usuario/guardar-usuario/guardar-usuario';
import { EditarUsuarioComponent } from './Componentes/Usuario/editar-usuario/editar-usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-usuario', pathMatch: 'full' },

  { path: 'listar-rol', component: ListarRol },
  { path: 'guardar-rol', component: GuardarRol },
  { path: 'editar-rol/:id', component: EditarRol },

  { path: 'listar-usuario', component: ListarUsuarioComponent },
  { path: 'guardar-usuario', component: GuardarUsuarioComponent },
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
];
