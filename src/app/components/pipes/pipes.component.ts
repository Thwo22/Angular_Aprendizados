import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  someText = "TESTANDO O PIPE OPERATOR";

  today = new Date();
}
