import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Tapp.component.ts Room</h1>
  </div>
  <div class="container">
    <h2>Kegs</h2>
    <ul>
      <li *ngFor="let currentKeg of kegs"><b>{{currentKeg.name}}</b> -<em>{{currentKeg.brand}}</em><br>alcohol content: {{currentKeg.alcoholContent}}%  \${{currentKeg.price}} per pint</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Sour Darkness', 'Forever Alone', 13.1, 5),
    new Keg('Jus Peachy', 'Liphes Gud', 6, 6),
    new Keg('Hip Hoppy IPA', 'Splitting Hares', 7, 5),
    new Keg('Pitch Noir', 'Busta Limes', 5, 4)
  ];
}

export class Keg {
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number){}
}
