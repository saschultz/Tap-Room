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
      <li [class]="brandColor(currentKeg)"  *ngFor="let currentKeg of kegs"><b>{{currentKeg.name}}</b> -<em>{{currentKeg.brand}}</em><br>alcohol content: <span [class]="alcBold(currentKeg)"> {{currentKeg.alcoholContent}}% </span>  \${{currentKeg.price}} per pint <button (click)="editKeg(currentKeg)">Edit Keg</button> {{currentKeg.pints}} pints <button (click)="sellPint(currentKeg)">Sold Pint</button> <button (click)="replaceKeg(currentKeg)">Replace this keg</button></li>
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
    new Keg('Pitch Noir', 'Busta Limes', 5, 4),
    new Keg('Grave Lies', 'Forever Alone', 13.2, 5),
    new Keg('Bg-Faded', 'Forever Alone', 11, 5),
    new Keg('ALE $9', 'Splitting Hares', 7, 9)
  ];
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  sellPint(currentKeg) {
    if (currentKeg.pints > 0) {
      currentKeg.pints -= 1;
      if (currentKeg.pints === 10) {
        alert('Warning! Running low on this keg! Life is finite.');
      }
    }
  }

  replaceKeg(currentKeg) {
    currentKeg.pints = 124;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  brandColor(currentKeg) {
    if (currentKeg.brand === 'Forever Alone') {
      return 'bg-danger';
    } else if (currentKeg.brand === 'Liphes Gud') {
      return 'bg-info';
    } else if (currentKeg.brand === 'Splitting Hares') {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  }
  alcBold(currentKeg) {
    if (currentKeg.alcoholContent > 6) {
      return 'badge';
    }
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number){}
}
