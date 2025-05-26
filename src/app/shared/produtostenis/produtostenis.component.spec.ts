import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutostenisComponent } from './produtostenis.component';

describe('ProdutostenisComponent', () => {
  let component: ProdutostenisComponent;
  let fixture: ComponentFixture<ProdutostenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutostenisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutostenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
