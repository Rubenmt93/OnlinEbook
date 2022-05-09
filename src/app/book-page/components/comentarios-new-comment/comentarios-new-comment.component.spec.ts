import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosNewCommentComponent } from './comentarios-new-comment.component';

describe('ComentariosNewCommentComponent', () => {
  let component: ComentariosNewCommentComponent;
  let fixture: ComponentFixture<ComentariosNewCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosNewCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosNewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
