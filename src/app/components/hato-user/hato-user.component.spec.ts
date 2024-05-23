import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatoUserComponent } from './hato-user.component';

describe('HatoUserComponent', () => {
  let component: HatoUserComponent;
  let fixture: ComponentFixture<HatoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HatoUserComponent]
    });
    fixture = TestBed.createComponent(HatoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
