import { Component, OnInit } from '@angular/core';
import { COMPRAS } from '../domain/mock-compras';
import { Compra } from '../domain/compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compras : Compra[] = COMPRAS;
  compra : Compra = new Compra();

  constructor() { }

  ngOnInit() {
  }



  addCompra(){
    // console.log(this.amigo.nome);
    let novaCompra = new Compra();
    novaCompra.id = this.compra.id;
    novaCompra.descricao = this.compra.descricao;
    this.compras.push(novaCompra);
   }
 

}
