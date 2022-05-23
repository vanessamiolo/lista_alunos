import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho_js';

  // Lista de estudantes contendo nome, ru, curso e data de nascimento
  students = [ 
    {
      name: 'Vanessa Miolo',
      ru: '3518693',
      class: 'Analise e Desenvolvimento de Sistemas',
      date: '21/09/1998'
    },
    {
      name: 'João',
      ru: '3518694',
      class: 'Administração',
      date: '22/05/1999'
    },
    {
      name: 'José',
      ru: '3518695',
      class: 'Direito',
      date: '12/10/2000'
    },
    {
      name: 'Maria',
      ru: '3518696',
      class: 'Letras',
      date: '23/01/2002'
    },
    {
      name: 'Ana',
      ru: '3518697',
      class: 'Medicina',
      date: '15/06/2003'
    },
  ]


}
