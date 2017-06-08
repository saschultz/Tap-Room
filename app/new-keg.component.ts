import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
      <label>Enter Keg Brand:</label>
      <input #newBrand>
      <label>Enter Keg Alcohol Content:</label>
      <input #newAlcoholContent>
      <label>Enter Keg Price:</label>
      <input #newPrice>
      <button (click)="submitForm(newName.value, newBrand.value, newAlcoholContent.value, newPrice.value); newName.value=''; newBrand.value=''; newAlcoholContent.value=''; newPrice.value='';">New Keg</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, alcoholContent: number, price: number) {
    var newKegToAdd: Keg = new Keg(name, brand, alcoholContent, price);
    this.newKegSender.emit(newKegToAdd);
  }
}
