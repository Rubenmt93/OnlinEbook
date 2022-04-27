import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypublishedbooksComponent } from './mypublishedbooks.component';

describe('MypublishedbooksComponent', () => {
  let component: MypublishedbooksComponent;
  let fixture: ComponentFixture<MypublishedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypublishedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypublishedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
