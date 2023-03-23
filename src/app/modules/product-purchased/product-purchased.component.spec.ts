import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPurchasedComponent } from './product-purchased.component';

describe('ProductPurchasedComponent', () => {
  let component: ProductPurchasedComponent;
  let fixture: ComponentFixture<ProductPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPurchasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
