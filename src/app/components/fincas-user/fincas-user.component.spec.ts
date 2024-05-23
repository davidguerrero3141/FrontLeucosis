import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasUserComponent } from './fincas-user.component';

describe('FincasUserComponent', () => {
  let component: FincasUserComponent;
  let fixture: ComponentFixture<FincasUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincasUserComponent]
    });
    fixture = TestBed.createComponent(FincasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
