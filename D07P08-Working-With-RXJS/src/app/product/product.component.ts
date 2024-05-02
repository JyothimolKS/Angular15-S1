// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  // Task 2: Filter products with discount > 10% or price > 1000
  filterProducts(): Observable<any[]> {
    return this.products$.pipe(
      map(products => products.filter(product => product.discount > 10 || product.price > 1000))
    );
  }

  // Task 3: Filter products with brand "apple"
  filterByBrand(brand: string): Observable<any[]> {
    return this.products$.pipe(
      map(products => products.filter(product => product.brand.toLowerCase() === brand.toLowerCase()))
    );
  }
}
