import { Component, OnInit } from '@angular/core';
import { IpService } from '../../servicios/ip.service';
import { IpGeoService } from '../../servicios/ipgeo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css'],
  imports: [CommonModule, FormsModule],
})
export class IpInfoComponent implements OnInit {
  ipInfov4: any;
  ipInfov6: any;
  userIpv4: string = '';
  userIpv6: string = '';
  userIp: string = '';

  constructor(
    private ipService: IpService,
    private ipGeoService: IpGeoService
  ){}

  ngOnInit(): void {
    // Obtener la IP del usuario primero
    this.ipService.getUserIp().subscribe(
      data => {
        this.userIpv4 = data.ip;
        console.log('IP del usuario:', this.userIpv4);
        this.ipGeoService.getUserInfo(this.userIpv4).subscribe(
          geoData => {
            this.ipInfov4 = geoData;
            console.log('Información de IP:', this.ipInfov4);
          },
          error => {
            console.error('Error al obtener la información de IP:', error.message);
          }
        );
      },
      error => {
        console.error('Error al obtener la IP del usuario:', error.message);
      }
    );
    
    this.ipGeoService.getGeoInfo().subscribe(
        geoData => {
          this.ipInfov6 = geoData;
          this.userIpv6 = this.ipInfov6.ip;
          console.log('Información de IP:', this.ipInfov6);
        },
        error => {
          console.error('Error al obtener la información de IP:', error);
        }
      );
  }
}


// this.ipGeoService.getGeoInfo().subscribe(
//   geoData => {
//     this.ipInfo = geoData;
//     this.userIp = this.ipInfo.ip;
//     console.log('Información de IP:', this.ipInfo);
//   },
//   error => {
//     console.error('Error al obtener la información de IP:', error);
//   }
// );