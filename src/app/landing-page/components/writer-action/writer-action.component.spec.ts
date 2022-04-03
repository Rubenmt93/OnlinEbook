import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterActionComponent } from './writer-action.component';

describe('WriterActionComponent', () => {
  let component: WriterActionComponent;
  let fixture: ComponentFixture<WriterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
