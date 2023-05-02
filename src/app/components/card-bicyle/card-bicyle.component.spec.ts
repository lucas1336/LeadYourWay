import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBicyleComponent } from './card-bicyle.component';

describe('CardBicyleComponent', () => {
  let component: CardBicyleComponent;
  let fixture: ComponentFixture<CardBicyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBicyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBicyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
