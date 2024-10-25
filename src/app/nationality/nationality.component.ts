import { Component, OnInit } from '@angular/core';
import { NationalityService } from '../../servicios/nationalize.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css'],
  standalone : true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NationalityComponent implements OnInit {
  name: string = '';
  nationalities: any;
  countries: any = [];
  countryFlags: { [key: string]: string } = {};

  constructor(private nationalityService: NationalityService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.nationalityService.getCountries().subscribe(data => {
      this.countries = data;
      this.countries.forEach((country: any) => {
        this.countryFlags[country.cca2] = country.flags.svg; // Mapear el código del país a la URL de la bandera
      });
    });
  }

  getNationalities(): void {
    this.nationalityService.getNationalities(this.name).subscribe(data => {
      this.nationalities = data;
    });
  }
}
