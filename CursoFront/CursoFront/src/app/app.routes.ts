import { Routes } from '@angular/router';

// Roles
import { ListarRolComponent } from './Componentes/Rol/listar-rol/listar-rol';
import { GuardarRolComponent } from './Componentes/Rol/guardar-rol/guardar-rol';
import { EditarRolComponent } from './Componentes/Rol/editar-rol/editar-rol';

// Usuarios
import { ListarUsuarioComponent } from './Componentes/Usuario/listar-usuario/listar-usuario';
import { GuardarUsuarioComponent } from './Componentes/Usuario/guardar-usuario/guardar-usuario';
import { EditarUsuarioComponent } from './Componentes/Usuario/editar-usuario/editar-usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-usuario', pathMatch: 'full' },

  // Roles
  { path: 'listar-rol', component: ListarRolComponent },
  { path: 'guardar-rol', component: GuardarRolComponent },
  { path: 'editar-rol/:id', component: EditarRolComponent },

  // Usuarios
  { path: 'listar-usuario', component: ListarUsuarioComponent },
  { path: 'guardar-usuario', component: GuardarUsuarioComponent },
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent }
];
