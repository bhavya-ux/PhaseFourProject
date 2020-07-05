import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbyIdComponent } from './flightby-id.component';

describe('FlightbyIdComponent', () => {
  let component: FlightbyIdComponent;
  let fixture: ComponentFixture<FlightbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
