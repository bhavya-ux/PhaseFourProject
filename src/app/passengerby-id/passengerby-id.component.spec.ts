import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerbyIdComponent } from './passengerby-id.component';

describe('PassengerbyIdComponent', () => {
  let component: PassengerbyIdComponent;
  let fixture: ComponentFixture<PassengerbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
