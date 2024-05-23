import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaAdminComponent } from './finca-admin.component';

describe('FincaAdminComponent', () => {
  let component: FincaAdminComponent;
  let fixture: ComponentFixture<FincaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FincaAdminComponent]
    });
    fixture = TestBed.createComponent(FincaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
