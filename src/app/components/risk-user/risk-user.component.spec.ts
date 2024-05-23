import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskUserComponent } from './risk-user.component';

describe('RiskUserComponent', () => {
  let component: RiskUserComponent;
  let fixture: ComponentFixture<RiskUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskUserComponent]
    });
    fixture = TestBed.createComponent(RiskUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
