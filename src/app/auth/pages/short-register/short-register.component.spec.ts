import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortRegisterComponent } from './short-register.component';

describe('ShortRegisterComponent', () => {
  let component: ShortRegisterComponent;
  let fixture: ComponentFixture<ShortRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
