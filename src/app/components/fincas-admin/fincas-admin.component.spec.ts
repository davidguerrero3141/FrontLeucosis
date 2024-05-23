import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasAdminComponent } from './fincas-admin.component';

describe('FincasAdminComponent', () => {
  let component: FincasAdminComponent;
  let fixture: ComponentFixture<FincasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincasAdminComponent]
    });
    fixture = TestBed.createComponent(FincasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
