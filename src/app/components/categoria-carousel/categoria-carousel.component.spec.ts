import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCarouselComponent } from './categoria-carousel.component';

describe('CategoriaCarouselComponent', () => {
  let component: CategoriaCarouselComponent;
  let fixture: ComponentFixture<CategoriaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
