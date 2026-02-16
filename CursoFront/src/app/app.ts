import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router){}

  uListar(){ this.router.navigate(['listar-usuario']); }
  uGuardar(){ this.router.navigate(['guardar-usuario']); }

  rListar(){ this.router.navigate(['roles/listar']); }
  rGuardar(){ this.router.navigate(['roles/guardar']); }
}
