import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'piano';

  PlaySound(nota: string) {
    let audio = new Audio();
    switch (nota) {
      case 'DO':
        audio.src = 'assets/audio/piano-DO.mp3';
        break;
      case 'RE':
        audio.src = 'assets/audio/piano-RE.mp3';
        break;
      case 'MI':
        audio.src = 'assets/audio/piano-MI.mp3';
        break;
      case 'FA':
        audio.src = 'assets/audio/piano-FA.mp3';
        break;
      case 'SOL':
        audio.src = 'assets/audio/piano-SOL.mp3';
        break;
      case 'LA':
        audio.src = 'assets/audio/piano-LA.mp3';
        break;
      case 'SI':
        audio.src = 'assets/audio/piano-SI.mp3';
        break;
    }
    audio.load();
    audio.play();
  }
}
