import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Menu } from './componentes/menu/menu';
import { authGuardGuard } from './auth/auth-guard-guard';

export const routes: Routes = [

    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"dashboard", component:Dashboard, canActivate:[authGuardGuard]},
    {path:"login", component:Login},
    {path:"home", component:Home, canActivate:[authGuardGuard]},
    {path:"menu", component:Menu}
];
