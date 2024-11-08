import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoViewPage } from './alumno-view.page';

describe('AlumnoViewPage', () => {
  let component: AlumnoViewPage;
  let fixture: ComponentFixture<AlumnoViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
