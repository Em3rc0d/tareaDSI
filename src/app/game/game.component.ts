import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../servicios/games.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: any[] = [];
  filteredGames: any[] = [];
  searchTerm: string = '';

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gamesService.getGames().subscribe(data => {
      this.games = data;
      this.filteredGames = data;
    });
  }

  onSearch(): void {
    this.filteredGames = this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}