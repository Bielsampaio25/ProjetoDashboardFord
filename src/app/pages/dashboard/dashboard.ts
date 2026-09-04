import { Component } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';
import { Header } from '../../componentes/header/header';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
