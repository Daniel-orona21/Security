import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { UsuarioDetailComponent } from './pages/usuario-detail/usuario-detail.component'; // Importar el componente de detalles
// import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AppComponent
    }
  
];
