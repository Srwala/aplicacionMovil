import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaEstudiantePage } from './vista-estudiante.page';

describe('VistaEstudiantePage', () => {
  let component: VistaEstudiantePage;
  let fixture: ComponentFixture<VistaEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
