import { Component, Input, OnInit } from '@angular/core';
import { Housinglocation } from 'src/app/Models/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation: Housinglocation;

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.housingLocation);
  }
}
