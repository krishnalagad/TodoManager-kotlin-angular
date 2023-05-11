import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  constructor(private _router: Router) {}
  getLocation() {
    // alert("not found")

    navigator.geolocation.getCurrentPosition((position) => {
      const latitute = position.coords.latitude;
      const longitude = position.coords.longitude;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitute}&lon=${longitude}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.table(data.address);
        })
        .catch(() => {
          console.log('Error fetching data from API.');
        });
    });
    this._router.navigate(['/'])
  }
}
