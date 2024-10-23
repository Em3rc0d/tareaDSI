import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../servicios/horoscope.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news', // Change to app-news if renaming
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class HoroscopoComponent implements OnInit { // Consider renaming to NewsComponent
  articles: any[] = [];

  constructor(private newsService: HoroscopeService) {} // Use the correct service

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe(data => {
      this.articles = data.articles;
    });
  }
}
