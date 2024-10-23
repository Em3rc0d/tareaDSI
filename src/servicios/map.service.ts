import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map!: google.maps.Map;
  private mapLoadedSubject = new BehaviorSubject<boolean>(false);
  mapLoaded$ = this.mapLoadedSubject.asObservable();

  constructor() {
    this.loadMap();
  }

  private loadMap() {
    const script = document.createElement('script');
    const apiKey = 'AIzaSyAtbxXerIvw6_YOeGJfNdvZT7EShm52lCU'; // Reemplaza con tu clave API
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=onGoogleMapsLoaded`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      console.error('Error loading Google Maps API script.');
      this.mapLoadedSubject.next(false);
    };

    document.body.appendChild(script);
    
    // Asigna la función de callback al objeto window
    window.onGoogleMapsLoaded = () => {
      this.initializeMap();
      this.mapLoadedSubject.next(true);
    };
  }

  private initializeMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Ubicación central
    const mapElement = document.getElementById('map') as HTMLElement;

    if (mapElement) { // Verifica que el elemento existe
      this.map = new google.maps.Map(mapElement, {
        zoom: 10,
        center: location
      });

      new google.maps.Marker({
        position: location,
        map: this.map
      });
    } else {
      console.error('Elemento del mapa no encontrado');
    }
  }
}
