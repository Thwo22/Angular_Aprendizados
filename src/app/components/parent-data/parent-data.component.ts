import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name!: string; 
  @Input() age!: number;
  @Input() job!: string;
  @Input() userData!: { email: string, role: string};
}

