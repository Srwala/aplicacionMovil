import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiaClavePage } from './cambia-clave.page';

describe('CambiaClavePage', () => {
  let component: CambiaClavePage;
  let fixture: ComponentFixture<CambiaClavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiaClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
