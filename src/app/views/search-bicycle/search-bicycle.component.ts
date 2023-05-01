import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-bicycle',
  templateUrl: './search-bicycle.component.html',
  styleUrls: ['./search-bicycle.component.scss'],
})
export class SearchBicycleComponent {
  model!: NgbDateStruct; // Add the model property here
}
