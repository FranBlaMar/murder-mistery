import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibretaComponent } from './libreta/libreta.component'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, LibretaComponent]
})
export class AppComponent {
  seleccion!: number; 

  seleccionar(numero: number): void {
    this.seleccion = numero;
    console.log(`Opción seleccionada: ${numero}`); 
  }
}
