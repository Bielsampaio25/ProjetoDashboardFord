import { Injectable } from '@angular/core'; //permite a injeção de dependencias
import { Usuario } from '../models/usuario.model'; //objeto
import { HttpClient } from '@angular/common/http'; // metodo HTTP
import { Observable, tap } from 'rxjs'; // permite o funcionamento das funções assicronas
import { Router } from '@angular/router';

const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root',
})
export class LoginAuth {

  private apiUrl = 'http://localhost:3001'; //URL da API

  constructor(private http: HttpClient, private router : Router) {} //faz a injeção de dependencia, ou seja a classe usa o HTTP

  login(usuario: Pick<Usuario, 'nome' | 'senha'>): Observable<Usuario> { //pega alguns atributos especificos (nome e senha) do objeto OBS: <Usuario, 'nome | 'senha'> cria uma lista chamada Usuario
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario).pipe(
      tap(response =>{
        sessionStorage.setItem(USER_KEY, JSON.stringify(response));
      })
    );
  }

  logout(): void{
    sessionStorage.removeItem(USER_KEY);
    this.router.navigate(["/login"]);
  }

  estaLogado(): boolean{
    const user = sessionStorage.getItem(USER_KEY);
    return user ? true : false;
  }
}