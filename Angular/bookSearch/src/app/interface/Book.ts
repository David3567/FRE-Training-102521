
// export interface Book {
//   id: string;
//   volumeInfo: {
//     title: string;
//     subtitle: string;
//     authors: string[];
//     publisher: string;
//     publishDate: string;
//     description: string;
//     averageRating: number;
//     ratingsCount: number;
//     imageLinks: {
//       thumbnail: string;
//       smallThumbnail: string;
//     };
//   };
// }

import { ImageLinks } from "./ImageLinks";
import { VolumeInfo } from "./volume-info";

// // // export interface Book {
// // //   kind:string,
// // //   totalItems:number,
// // //   items:[]
// // // }



export interface Book {
  imageLink?: ImageLinks['thumbnail'],
  title?: VolumeInfo['title'],
  authors?: VolumeInfo['authors'],
  publisher?: VolumeInfo['publisher'],
  published_date?: VolumeInfo['publishedDate'],
  description?: VolumeInfo['description']
}