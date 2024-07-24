import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libreta',
  templateUrl: './libreta.component.html',
  styleUrls: ['./libreta.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LibretaComponent {
  @Input() seleccion!: number;
  isMenuOpen = false;
  imageUrlDni: string = 'assets/dni.png';
  imageComida: string = 'assets/comida.jpg';
  imagenEstudiar: string= 'assets/estudiando.jpeg';
  imagenPlaya: string= 'assets/playa.jpg';
  imagenPaseo: string= 'assets/paseo.jpeg';
  imagenDibujo: string= 'assets/dibujo.jpg';
  imagenAlarma: string= 'assets/alarma.jpeg';

  meme1: string ='assets/meme1.jpeg'
  meme2: string ='assets/meme2.jpeg'
  meme3: string ='assets/meme3.jpeg'
  meme4: string ='assets/meme4.jpeg'
  meme5: string ='assets/meme5.jpeg'

  activeTab: string = 'historia'; // Pestaña activa inicial
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  nombres: any[] = [{nombre:'Asukita', sospechas:'Asukita es la cuñada de Cristina. No era especialmente amiga de Kike, ya que este nunca intento regalarle nada. Hace dias tuvo una discusión violenta tras la declaración de Kike sobre que todas las féminas son rencorosas. Durante la tarde del asesinato, Asukita se encontraba comiendo pozolito tras haber estado leyendo y dar un paseo.'}, 
  {nombre:'Pichadura', sospechas:'Pichadura es un streamer español. Este era considerado como el mejor amigo de Kike. La salud mental de Pichadura empeoraba cada vez mas tras las insistentes exijencias de Kike para jugar al Lord of the Fallen y su trato de novio tóxico. Durante la tarde del asesinato, Didclaun se encontraba jugando al Valheim  tras estar viendo videos de AriGameplays y dar un paseo por playa.'}, {nombre:'Zard', sospechas:'Zard es considerado el máximo enemigo de Kike. Zard ha sido demandado por Kike tras las acusaciones del robo de 50€. Recientemente Zard le dijo a Kike que le odiaba lo cual destrozó a nuestro amado Kike. Durante la tarde del asesinato, Zard se encontraba estudiando en la habitación tras volver de comer por 18 vez del dia.'}, 
  {nombre:'Ellinia', sospechas: 'Ellinia es una artista freelance. Todos saben que odia a Kike desde que tiene uso de razón. Kike ha tenido muchos comentarios ofensivos hacia ella y su relación con CarlitRos. Durante la tarde del asesinato, Ellinia se encontraba jugando al Valheim en el salon tras estar pintando en la piscina.'}, 
  {nombre:'Carlitros', sospechas: 'CarlitRos era el antiguo mejor amigo de Kike. Eran inseparables. La relación fue empeorando tras los malos tratos de Kike a CarlitRos. Kike le pidió a CarlitRos comprar una casa en conjunto para ponerla en alquiler (Kike ponía 10 euros y Carlos 899.990 euros). Durante la tarde del asesinato, CarlitRos se encontraba jugando al Valheim tras despertarse de la siesta.'}];
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  playAudio(event: Event) {
    event.preventDefault(); 
    const audio = this.audioPlayer.nativeElement;

    if (audio) {
      audio.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  }

  get activeTabTitle(): string {
    switch (this.activeTab) {
      case 'historia': return 'Historia';
      case 'sospechosos': return 'Sospechosos';
      case 'pruebas': return 'Pruebas';
      case 'perfil': return 'Perfil';
      case 'shitpost': return 'Shitpost';
      default: return 'Historia';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectTab(tab: string) {
    this.activeTab = tab;
    this.isMenuOpen = false; // Cierra el menú después de seleccionar una pestaña
  }
}
