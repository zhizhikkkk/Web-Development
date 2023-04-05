import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  products = [...products];

  share(name: string, url: string) {
    window.open(`https://t.me/share/url?url=${url}&text=${name}`)
  }
}