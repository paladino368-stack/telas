import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.component.html',
  styleUrls: ['./pag1.component.css']
})
export class Pag1Component implements OnInit {


  logo = 'assets/logos/nikoletta.png';
  pedidoId: '1988';
  negociacao: 'valor';
  cidade: 'Londrina';
  valor: '28,26';
  cpf: '081.290.739-60';
  endereco: ' ALAMEDA FLOR DO CAMPO';
  numero: '112';
  complemento: ' LOTEAMENTO MORADA DAS FLORES';
  vencimento: '11 de abril de 2020';


  constructor() { }

  ngOnInit() {
  }

}
