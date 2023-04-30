import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleTypesComponent } from './bicycle-types.component';

describe('BicycleTypesComponent', () => {
  let component: BicycleTypesComponent;
  let fixture: ComponentFixture<BicycleTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicycleTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BicycleTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
