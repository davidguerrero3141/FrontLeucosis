import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminMapComponent } from './view-admin-map.component';

describe('ViewAdminMapComponent', () => {
  let component: ViewAdminMapComponent;
  let fixture: ComponentFixture<ViewAdminMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdminMapComponent]
    });
    fixture = TestBed.createComponent(ViewAdminMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
