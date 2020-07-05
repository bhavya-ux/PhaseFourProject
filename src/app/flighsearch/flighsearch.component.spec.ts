import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighsearchComponent } from './flighsearch.component';

describe('FlighsearchComponent', () => {
  let component: FlighsearchComponent;
  let fixture: ComponentFixture<FlighsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlighsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
