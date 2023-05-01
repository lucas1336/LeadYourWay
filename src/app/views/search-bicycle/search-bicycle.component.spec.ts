import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBicycleComponent } from './search-bicycle.component';

describe('SearchBicycleComponent', () => {
  let component: SearchBicycleComponent;
  let fixture: ComponentFixture<SearchBicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBicycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
