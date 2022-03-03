import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylibraryHomeComponent } from './mylibrary-home.component';

describe('MylibraryHomeComponent', () => {
  let component: MylibraryHomeComponent;
  let fixture: ComponentFixture<MylibraryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylibraryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MylibraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
