import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  templateUrl: './componente-personalizado.component.html',
  styleUrl: './componente-personalizado.component.css'
})
export class ComponentePersonalizadoComponent {
  @Input() nome = ""
  @Input() sobreNome = "";
}
