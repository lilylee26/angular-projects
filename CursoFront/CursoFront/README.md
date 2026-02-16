# CursoFront (Usuarios y Roles)

Frontend Angular standalone (estilo simple tipo PadreHijo):
- CRUD de Roles
- CRUD de Usuarios
- Buscar usuarios por texto
- Filtrar usuarios por rol

## Requisitos
- Node.js + npm
- Angular CLI

## Instalar y correr
```bash
npm install
ng serve -o
```

## Backend esperado
- http://localhost:8010/roles
- http://localhost:8010/usuarios
- http://localhost:8010/usuarios/buscar?q=...
- http://localhost:8010/usuarios/rol/{idRol}
- http://localhost:8010/usuarios/{id}
