import { CanActivateFn, Router } from '@angular/router';
import { LoginAuth } from '../services/login-auth';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginAuth);
  const router = inject(Router);

  if(authService.estaLogado()){
    return true;
  }

  router.navigate(["/login"]);
  return false;
};
