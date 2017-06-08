import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Tapp.component.ts Room</h1>
  </div>
  <div class="container">
    <h2>Kegs</h2>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)='addKeg($event)'></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
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

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
