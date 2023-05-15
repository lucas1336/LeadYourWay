import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleListComponent } from './bicycle-list.component';

describe('BicycleListComponent', () => {
  let component: BicycleListComponent;
  let fixture: ComponentFixture<BicycleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicycleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BicycleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
