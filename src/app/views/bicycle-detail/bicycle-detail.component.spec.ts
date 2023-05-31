import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleDetailComponent } from './bicycle-detail.component';

describe('BicycleDetailComponent', () => {
  let component: BicycleDetailComponent;
  let fixture: ComponentFixture<BicycleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicycleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BicycleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
