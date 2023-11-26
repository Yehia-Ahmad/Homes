import { HousingService } from 'src/app/Services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from 'src/app/Models/housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: number;
  housingLocation: Housinglocation | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.id);
  }
}
