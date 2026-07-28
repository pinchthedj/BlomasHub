import { Component } from '@angular/core';

@Component({
  selector: 'app-clothing',
  imports: [],
  templateUrl: './clothing.html',
  styleUrl: './clothing.scss',
})
export class Clothing {

  hoodies = [
    'clothes/hoody.png',
    'clothes/hoody1.png',
  ];

  hoodieDescriptions = [
    'Classic hoodie with the Blomas Hub logo in black.',
    'Classic hoodie with the Blomas Hub logo in red.',
  ];

  currentHoodieIndex = 0;

  nextHoodie() {
    this.currentHoodieIndex = (this.currentHoodieIndex + 1) % this.hoodies.length;
  }

  prevHoodie() {
    this.currentHoodieIndex =
      (this.currentHoodieIndex - 1 + this.hoodies.length) % this.hoodies.length;
  }

  currentShirtIndex = 0;

  nextShirt() {
    this.currentShirtIndex = (this.currentShirtIndex + 1) % this.shirts.length;
  }

  prevShirt() {
    this.currentShirtIndex =
      (this.currentShirtIndex - 1 + this.shirts.length) % this.shirts.length;
  }

  shirts = [
    'clothes/shirt1.png',
    'clothes/shirt2.png',
    'clothes/shirt3.png',
    'clothes/shirt4.png',
    'clothes/shirt6.png',
    'clothes/shirt5.png',
    'clothes/shirt7.png',
    'clothes/shirt8.png',
  ]

  headWear = [
    'clothes/bennie.png',
    'clothes/shiny_bennie.png',
    'clothes/skully.png',
  ]

  headWearDescriptions = [
    'Blomas Hub bennie',
    'Blomas Hub shiny bennie',
    'Blomas Hub skully',
  ]
  currentHeadIndex = 0;

  nextHeadWear() {
    this.currentHeadIndex = (this.currentHeadIndex + 1) % this.headWear.length;
  }

  prevHeadWear() {
    this.currentHeadIndex = (this.currentHeadIndex - 1 + this.headWear.length) % this.headWear.length;
  }


}
