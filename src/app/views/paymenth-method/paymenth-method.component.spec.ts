import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenthMethodComponent } from './paymenth-method.component';

describe('PaymenthMethodComponent', () => {
  let component: PaymenthMethodComponent;
  let fixture: ComponentFixture<PaymenthMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymenthMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymenthMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
