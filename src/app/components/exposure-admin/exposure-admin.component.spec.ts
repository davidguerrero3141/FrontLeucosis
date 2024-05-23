import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposureAdminComponent } from './exposure-admin.component';

describe('ExposureAdminComponent', () => {
  let component: ExposureAdminComponent;
  let fixture: ComponentFixture<ExposureAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExposureAdminComponent]
    });
    fixture = TestBed.createComponent(ExposureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
