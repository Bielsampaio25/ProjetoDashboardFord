import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Menu } from './componentes/menu/menu';
import { Teste } from './teste/teste';

export const routes: Routes = [

    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"dashboard", component:Dashboard},
    {path:"login", component:Login},
    {path:"home", component:Home},
    {path:"menu", component:Menu},
    {path:"teste", component:Teste}
];
