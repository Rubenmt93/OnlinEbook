import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogHomeComponent } from './catalog-home.component';

describe('CatalogHomeComponent', () => {
  let component: CatalogHomeComponent;
  let fixture: ComponentFixture<CatalogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
