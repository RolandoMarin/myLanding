import { Component, OnInit, Input } from '@angular/core';
import { Post, ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input() data: Post = {
    body: "",
    id: 0,
    title: "",
    userId: 0,
    image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg"
  };

  @Input() name: string = "";

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private products: ProductService
     ) { }

  ngOnInit() {
  }

  goToProduct() {
    this.router.navigateByUrl(`/products/${this.data.id}`);
  }

}
