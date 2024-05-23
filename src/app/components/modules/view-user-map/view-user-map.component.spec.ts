import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserMapComponent } from './view-user-map.component';

describe('ViewUserMapComponent', () => {
  let component: ViewUserMapComponent;
  let fixture: ComponentFixture<ViewUserMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserMapComponent]
    });
    fixture = TestBed.createComponent(ViewUserMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
