import { Component, OnInit } from '@angular/core';
import { Housinglocation } from '../../Models/housinglocation';
import { HousingService } from 'src/app/Services/housing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housingLocationList: Housinglocation[];
  filteredLocationList: Housinglocation[];

  housingLocationListSub: Subscription;

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllHousingLocations();
  }

  getAllHousingLocations() {
    this.housingLocationListSub = this.housingService
      .getAllHousingLocations()
      .subscribe((resp: Housinglocation[]) => {
        this.housingLocationList = resp;
        this.filteredLocationList = this.housingLocationList;
      });
  }

  filterResults(text: string) {
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
