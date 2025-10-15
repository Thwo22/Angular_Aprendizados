import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';  
import { TesteConsolidacaoComponent } from './components/teste-consolidacao/teste-consolidacao.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component'; 
import { EventosComponent } from './components/eventos/eventos.component';  
import { EmitterComponent } from './components/emitter/emitter.component';
import { FrutasListaComponent } from './components/frutas-lista/frutas-lista.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, SecondComponentComponent, TesteConsolidacaoComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent, FrutasListaComponent, ListRenderComponent, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Thiago";
  userAge = 19;
  userJob = "Developer";
  userData = {
    email: "thwo28391@gmail.com",
    role: "admin"
  }
  title = 'aprendizados';
}
