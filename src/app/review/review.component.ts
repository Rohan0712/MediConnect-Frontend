import { Component,Input,OnInit } from '@angular/core';
import { Review } from './review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[] | any;
  @Input()
  rating!: number;
  stars: number[] = [1, 2, 3, 4, 5]; // Number of stars
  // Function to split the reviews into chunks of 3
  // get chunkedMedicines(): any[][] {
  //   const chunkSize = 3;
  //   const chunkedArray = [];

  //   for (let i = 0; i < this.reviews.length; i += chunkSize) 
  //   {
  //     chunkedArray.push(this.reviews.slice(i, i + chunkSize));
  //   }

  //   return chunkedArray;
  // }



  ngOnInit() {
    // You can load the JSON data from an API or a local file here
    // For local file, assuming it's in the assets folder
   // this.http.get('assets/reviews-data.json').subscribe((data: any[]) => {
      this.reviews = [
        {
          "id": 1,
          "name": "Samantha S.",
          "location": "Manchester, UK`",
          "rating": 4,
          "comment": "This product is great!",
          "date": "2023-09-22"
        },
        {
          "id": 2,
          "name": "Victoria Justice",
          "location": "London, UK",
          "rating": 5,
          "comment": "Excellent product!",
          "date": "2023-09-21"
        },
        {
          "id": 3,
          "name": "Layleigh C",
          "location": "Leicester, UK",
          "rating": 3,
          "comment": "It's okay, could be better.",
          "date": "2023-09-20"
        },
        {
          "id": 4,
          "name": "Rohan Tandel",
          "location": "Huddersfield, UK",
          "rating": 2,
          "comment": "Needs improvement",
          "date": "2023-03-03"
        }
      ];
    //});
  }
}
