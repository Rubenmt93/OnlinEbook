import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyslopesComponent } from './myslopes.component';

describe('MyslopesComponent', () => {
  let component: MyslopesComponent;
  let fixture: ComponentFixture<MyslopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyslopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyslopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
