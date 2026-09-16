import { Component } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';
import { Header } from '../../componentes/header/header';
import { Veiculo } from '../../models/veiculo.model';
import { Vehicle } from '../../services/vehicle';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, Header, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
  veiculos : Veiculo [] = [];

  constructor(private vehicle : Vehicle){}

  ngOnInit(): void{
    this.vehicle.getVeiculos().subscribe(
      response => {
        this.veiculos = response.vehicles;
      }
    );
  }

  veiculoSelecionado : Veiculo | null = null;

  veiculoEscolhido(e : Event) : void{
      const idSelecionado = (e.target as HTMLSelectElement).value;

      if(idSelecionado){
        this.veiculoSelecionado = this.veiculos.find(v => v.id == Number(idSelecionado))|| null;
      }else{
        this.veiculoSelecionado = null;
      }
  }
}
