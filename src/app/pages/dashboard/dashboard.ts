import { Component, OnInit } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';
import { Header } from '../../componentes/header/header';
import { DadosVeiculo, Veiculo } from '../../models/veiculo.model';
import { Vehicle } from '../../services/vehicle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, Header, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  veiculos: Veiculo[] = [];

  veiculoSelecionado: Veiculo | null = null;

  dadosVeiculo: DadosVeiculo | null = null;

  codigoVin: string = '';

  mensagemErro: string = '';

  constructor(private vehicle: Vehicle) {}

  ngOnInit(): void {
    this.vehicle.getVeiculos().subscribe(
      response => {
        this.veiculos = response.vehicles;
      }
    );
  }

  veiculoEscolhido(e: Event): void {
    const idSelecionado = (e.target as HTMLSelectElement).value;

    if (idSelecionado) {
      this.veiculoSelecionado =
        this.veiculos.find(v => v.id == Number(idSelecionado)) || null;
    } else {
      this.veiculoSelecionado = null;
    }
  }

  pesquisarVin(): void {

    if (!this.codigoVin.trim()) {
      return;
    }

    this.mensagemErro = '';

    this.vehicle.getDadosVeiculo(this.codigoVin).subscribe({

      next: response => {
        this.dadosVeiculo = response;
      },

      error: error => {
        this.dadosVeiculo = null;

        if (error.status === 400) {
          this.mensagemErro = 'Código VIN não encontrado.';
        } else {
          this.mensagemErro = 'Erro ao consultar o veículo.';
        }
      }

    });
  }
}