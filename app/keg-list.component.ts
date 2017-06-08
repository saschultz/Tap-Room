import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li [class]="brandColor(currentKeg)" *ngFor="let currentKeg of childKegList"><b>{{currentKeg.name}}</b> -<em>{{currentKeg.brand}}</em><br>alcohol content: <span [class]="alcBold(currentKeg)"> {{currentKeg.alcoholContent}}% </span>  \${{currentKeg.price}} per pint <button (click)="editKegClicked(currentKeg)">Edit Keg</button> {{currentKeg.pints}} pints <button (click)="sellPint(currentKeg)">Sold Pint</button> <button (click)="replaceKeg(currentKeg)">Replace this keg</button>
    </li>
  </ul>
  `
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editKegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
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
