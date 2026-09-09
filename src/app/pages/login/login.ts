import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuth } from '../../services/login-auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  nome = '';
  senha = '';
  erro = '';

  constructor(
    private loginAuth: LoginAuth,
    private router: Router
  ) {}

  login() {

    console.log('Botão clicado');
    console.log('Nome:', this.nome);
    console.log('Senha:', this.senha);

    this.loginAuth.login({
      nome: this.nome,
      senha: this.senha
    }).subscribe({

      next: (usuario) => {
        console.log('Login realizado:', usuario);

        this.router.navigate(['/dashboard']);
      },

      error: (erro) => {
        console.log('Erro:', erro);

        this.erro = erro.error?.message || 'Erro ao realizar login';
      }

    });
  }
}