import { Component, OnInit } from '@angular/core';
import { Post, ProductService } from './../product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: any[] = [];

  posts: Post[] = [];

  constructor(private products: ProductService) { }

  ngOnInit() {
    this.data = this.products.getAll();

    this.products.getTopPosts(50).subscribe(data => {
      console.log("inside landing component", data);
      this.posts = data;
    });
  }
  addNewItem() {
    this.products.addData({ name: "sprite", image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg", text: "some random text" });
  }

}
