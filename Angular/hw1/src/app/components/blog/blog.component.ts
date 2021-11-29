import { Component, OnInit, Input} from '@angular/core';
import { BLOGS } from '../../mock-blogs';
import { Blog } from '../../Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs:  Blog[] = BLOGS;
  titleColor = "";

  constructor() { }

  ngOnInit(): void {
  }

  getTitleColor(color:string) {
    this.titleColor = color;
  }

  // blogs = [
  //   {
  //     id:1,
  //     title: 'title 1',
  //     content:'content 1',
  //     color:'red'
  // },
  // {
  //     id:2,
  //     title: 'title 2',
  //     content:'content 2',
  //     color:'blue'
  // },
  // {
  //     id:3,
  //     title: 'title 3',
  //     content:'content 3',
  //     color:'green'
  // },
  // {
  //     id:4,
  //     title: 'title 4',
  //     content:'content 4',
  //     color:'black'
  // }
  // ];

}

// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: 'app-blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.scss']
// })
// export class BlogComponent implements OnInit {
//   titleColor = "blue";
//   contextsInfo = [
//     {
//       title: "1. Where does it come from?",
//       content:
//         "1. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
//       color: "blue",
//     },
//     {
//       title: "2. Where does it come from?",
//       content:
//         "2. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
//       color: "black",
//     },
//     {
//       title: "3. Where does it come from?",
//       content:
//         "3. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
//       color: "red",
//     },
//     {
//       title: "4. Where does it come from?",
//       content:
//         "4. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
//       color: "green",
//     },
//   ];

//   constructor() {}

//   ngOnInit() {
//     console.log(this.titleColor);
//   }

//   getTitleColor(color: string) {
//     this.titleColor = color;
//   }
// }