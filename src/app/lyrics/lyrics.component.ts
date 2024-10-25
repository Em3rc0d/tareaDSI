import { Component } from '@angular/core';
import { LyricsService } from '../../servicios/lyrics.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent {
  artist: string = '';
  title: string = '';
  lyrics: string = '';

  constructor(private lyricsService: LyricsService) {}

  fetchLyrics() {
    this.lyricsService.getLyrics(this.artist, this.title).subscribe(
      (response) => {
        this.lyrics = response.lyrics || 'Letra no encontrada.';
      },
      (error) => {
        console.error('Error fetching lyrics', error);
        this.lyrics = 'Error al obtener la letra.';
      }
    );
  }
}
