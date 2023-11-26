import { Component } from '@angular/core';
import { Housinglocation } from '../../Models/housinglocation';
import { HousingService } from 'src/app/Services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: Housinglocation[];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
