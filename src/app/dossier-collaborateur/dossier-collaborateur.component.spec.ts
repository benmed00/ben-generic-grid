import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierCollaborateurComponent } from './dossier-collaborateur.component';

describe('DossierCollaborateurComponent', () => {
  let component: DossierCollaborateurComponent;
  let fixture: ComponentFixture<DossierCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossierCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
