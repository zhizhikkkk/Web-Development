import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}

  products?: Product[];

  share(name: string, url: string) {
    window.open(`https://t.me/share/url?url=${url}&text=${name}`)
  }

  kaspi(url: string) {
    window.open(url)
  }
  addLike(product: Product){
    product.likes++;
  }
  deleteP(product: Product){
    product.categoryName = 'Deleted'
    this.ngOnInit()
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productCategory = String(routeParams.get('name'));
    //console.log(productCategory)
  
    // Find the product that correspond with the id provided in route.
    this.products = products.filter(product => product.categoryName === productCategory);
    //console.log(productIdFromRoute)
    //console.log(this.products)
  }
}
