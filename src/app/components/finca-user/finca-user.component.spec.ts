import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaUserComponent } from './finca-user.component';

describe('FincaUserComponent', () => {
  let component: FincaUserComponent;
  let fixture: ComponentFixture<FincaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincaUserComponent]
    });
    fixture = TestBed.createComponent(FincaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
