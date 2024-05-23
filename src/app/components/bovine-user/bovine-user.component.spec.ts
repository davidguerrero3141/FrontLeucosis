import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovineUserComponent } from './bovine-user.component';

describe('BovineUserComponent', () => {
  let component: BovineUserComponent;
  let fixture: ComponentFixture<BovineUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BovineUserComponent]
    });
    fixture = TestBed.createComponent(BovineUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
