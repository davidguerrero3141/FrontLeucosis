import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAdminComponent } from './risk-admin.component';

describe('RiskAdminComponent', () => {
  let component: RiskAdminComponent;
  let fixture: ComponentFixture<RiskAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskAdminComponent]
    });
    fixture = TestBed.createComponent(RiskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
