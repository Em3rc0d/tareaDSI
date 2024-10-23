import { Component, OnInit } from '@angular/core';
import { NationalizeService } from '../../servicios/nationalize.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nationality',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {
  name: string = ''; // Default name
  nationalities: any;

  constructor(private nationalizeService: NationalizeService) {}

  ngOnInit(): void {
    this.getNationalities(); // Optional, to fetch default name's nationalities
  }

  getNationalities(): void {
    this.nationalizeService.getNationalities(this.name).subscribe(data => {
      this.nationalities = data;
    }, error => {
      console.error('Error fetching nationalities:', error);
    });
  }
}
