import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStateComponent } from './register-state.component';

describe('RegisterStateComponent', () => {
  let component: RegisterStateComponent;
  let fixture: ComponentFixture<RegisterStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterStateComponent]
    });
    fixture = TestBed.createComponent(RegisterStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
