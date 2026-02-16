import { Routes } from '@angular/router';
import { ListarCompus } from './Componentes/listar-compus/listar-compus';
import { GuardarCompus } from './Componentes/guardar-compus/guardar-compus';
import { EditarCompus } from './Componentes/editar-compus/editar-compus';

export const routes: Routes = [
    {path: 'listar', component : ListarCompus},
    {path: 'guardar', component : GuardarCompus},
    {path : 'editar', component : EditarCompus}
];
