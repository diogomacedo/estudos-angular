import { Component } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards: Card[] = [
    {
      title: 'Arroz',
      description: 'Adoro arroz com legumes! Pode ser cenoura, vagem, ervilha, milho verde... whatever.'
    },
    {
      title: 'Feijão',
      description: 'Eu gosto de feijão bem basiquinho, com bastante caldo e pouco tempero.'
    },
    {
      title: 'Macarrão',
      description: 'Eu gosto de macarrão com molho pomodoro com muito manjericão e parmesão'
    }
  ];

  novoContato = {
    nome: '',
    email: ''
  }

  contatos: Array<any> = [];

  salvarContato() {
    console.log(this.novoContato);
    this.contatos.push(this.getContato());
    this.initContato();
  }

  removerContato(contato: any) {
    let index = this.contatos.findIndex(item => item.nome == contato.nome && item.email == contato.email);
    if (index >= 0) {
      this.contatos.splice(index, 1);
    }
  }

  private initContato() {
    this.novoContato = {
      nome: '',
      email: ''
    }
  }

  private getContato() {
    return JSON.parse(JSON.stringify(this.novoContato));
  }

  visualizar(item: Card) {
    console.log('Card: ', item);
  }

}
