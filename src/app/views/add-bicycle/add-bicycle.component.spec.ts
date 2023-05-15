import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBicycleComponent } from './add-bicycle.component';

describe('AddBicycleComponent', () => {
  let component: AddBicycleComponent;
  let fixture: ComponentFixture<AddBicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBicycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
