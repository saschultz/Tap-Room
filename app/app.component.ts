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
      <li *ngFor="let currentKeg of kegs"><b>{{currentKeg.name}}</b> -<em>{{currentKeg.brand}}</em><br>alcohol content: {{currentKeg.alcoholContent}}%  \${{currentKeg.price}} per pint <button (click)="editKeg(currentKeg)">Edit Keg</button></li>
    </ul>
    <div *ngIf="selectedKeg">
      <h3>{{selectedKeg.name}}</h3>
      <h3>Edit Keg</h3>
      <label>Enter Keg Name</label>
      <input [(ngModel)]="selectedKeg.name">
      <label>Enter Keg Brand</label>
      <input [(ngModel)]="selectedKeg.brand">
      <label>Enter Keg Alcohol Content</label>
      <input [(ngModel)]="selectedKeg.alcoholContent">
      <label>Enter Keg Price</label>
      <input [(ngModel)]="selectedKeg.price">
      <button (click)="finishedEditing()">Done</button>
    </div>
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
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number){}
}
