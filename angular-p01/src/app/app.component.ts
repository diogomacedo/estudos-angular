import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

}
