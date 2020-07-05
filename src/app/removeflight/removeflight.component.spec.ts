import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveflightComponent } from './removeflight.component';

describe('RemoveflightComponent', () => {
  let component: RemoveflightComponent;
  let fixture: ComponentFixture<RemoveflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
