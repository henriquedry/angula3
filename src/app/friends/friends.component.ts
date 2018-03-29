import { Component, OnInit } from '@angular/core';

import { FRIENDS } from '../domain/mock-amigos';
import { Amigo } from '../domain/amigos';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})



export class FriendsComponent implements OnInit {


  amigos : Amigo[] = FRIENDS;
  amigo : Amigo = new Amigo();
  constructor() { }


  
  ngOnInit() {
  }

  addAmigo(){
   // console.log(this.amigo.nome);
   let novoAmigo = new Amigo();
   novoAmigo.id = this.amigo.id;
   novoAmigo.nome = this.amigo.nome;
   novoAmigo.dataNascimento = this.amigo.dataNascimento;
   this.amigos.push(novoAmigo);
  }



}

