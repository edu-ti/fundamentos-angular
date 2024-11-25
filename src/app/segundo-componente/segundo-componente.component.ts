import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = "joão"
  dataNascimento = "1999/12/12"
  urlImagem = "/assets/nosPB.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento de João é: ${this.dataNascimento }`)
  }

}
