import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../../componentes/menu/menu';
import { Header } from "../../componentes/header/header";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
