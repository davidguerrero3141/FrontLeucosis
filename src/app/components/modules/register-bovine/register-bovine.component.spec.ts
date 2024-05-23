import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBovineComponent } from './register-bovine.component';

describe('RegisterBovineComponent', () => {
  let component: RegisterBovineComponent;
  let fixture: ComponentFixture<RegisterBovineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterBovineComponent]
    });
    fixture = TestBed.createComponent(RegisterBovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
