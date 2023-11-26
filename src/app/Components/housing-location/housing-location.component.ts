import { Component, Input, OnInit } from '@angular/core';
import { Housinglocation } from 'src/app/Models/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation: Housinglocation;

  constructor() {}
}
