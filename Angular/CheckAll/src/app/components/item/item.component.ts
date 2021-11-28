// import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Movie } from '../../Movie'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 @Input() movie!: Movie;


  constructor() { }

  ngOnInit(): void {
   
  }

 
  // isSelected() {
  //     return this.item.isSelected == true;
  //     console.log("movie.title");
  // }


}
