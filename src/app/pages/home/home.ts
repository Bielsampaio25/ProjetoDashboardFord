import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../../componentes/menu/menu';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
