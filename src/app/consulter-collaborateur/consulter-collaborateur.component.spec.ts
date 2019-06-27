import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCollaborateurComponent } from './consulter-collaborateur.component';

describe('ConsulterCollaborateurComponent', () => {
  let component: ConsulterCollaborateurComponent;
  let fixture: ComponentFixture<ConsulterCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
