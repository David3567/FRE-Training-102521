import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() title: string = 'title';
  @Input() bgColor: string = 'bgColor';

  @Output() newColorEvent = new EventEmitter<string>();

  changeTitleColor(): void {
    this.newColorEvent.emit(this.bgColor);
  }

  constructor() {}

  ngOnInit(): void {}
}
