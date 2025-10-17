import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-twdb-2',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './twdb-2.component.html',
  styleUrl: './twdb-2.component.css'
})
export class Twdb2Component {
  name: string = "";
}
