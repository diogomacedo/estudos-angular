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
      description: 'Adoro arroz com legumes! Pode ser cenoura, vagem, ervilha, milho verde... whatever.',
      imageUrl: 'https://img.itdg.com.br/tdg/images/recipes/000/166/751/357546/357546_original.jpg'
    },
    {
      title: 'Feijão',
      description: 'Eu gosto de feijão bem basiquinho, com bastante caldo e pouco tempero.',
      imageUrl: 'https://vitat.com.br/alimentacao/busca-de-alimentos/Content/img/alimentos/366-feij%C3%A3o-branco-cozido.jpg'
    },
    {
      title: 'Macarrão',
      description: 'Eu gosto de macarrão com molho pomodoro com muito manjericão e parmesão',
      imageUrl: 'https://naminhapanela.com/wp-content/uploads/2020/04/Macarr%C3%A3o-alho-e-%C3%B3leo-4-1900x1267.jpg'
    },
    {
      title: 'Farinha',
      description: 'Farofa com cebola, alho, banana passa e coentro, na manteiga',
      imageUrl: 'https://imageswscdn.wslojas.com.br/files/24534/farinha-mandioca-fina-bahia-25-kg-saco-29-1.jpg'
    }
  ];

  novoCard: Card = {
    title: '',
    description: '',
    imageUrl: ''
  }

  salvar() {
    this.cards.push(this.getCard());
    this.initCard();
  }

  private initCard() {
    this.novoCard = {
      title: '',
      description: '',
      imageUrl: ''
    }
  }

  private getCard() {
    return JSON.parse(JSON.stringify(this.novoCard));
  }

  desabilitarSalvar() {
    let result =
      this.novoCard.title === undefined || this.novoCard.title === '' ||
      this.novoCard.description === undefined || this.novoCard.description === '' ||
      this.novoCard.imageUrl === undefined || this.novoCard.imageUrl === '';
      return result;
  }

}
