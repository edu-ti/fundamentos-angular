import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome:'Samsung', descricao:'Galaxy 24 Pro Ultra', esgotado:false},
    {id: 2, nome:'Xiaomi', descricao:'Mi 15 Pro Plus', esgotado:true},
    {id: 3, nome:'Iphone', descricao:'18 Pro-Max', esgotado:false}
  ]
}
