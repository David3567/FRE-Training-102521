import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name = 'Jojo';

  constructor() {}

  ngOnInit(): void {}
}
