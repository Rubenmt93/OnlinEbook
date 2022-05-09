import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosContainerComponent } from './comentarios-container.component';

describe('ComentariosContainerComponent', () => {
  let component: ComentariosContainerComponent;
  let fixture: ComponentFixture<ComentariosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
