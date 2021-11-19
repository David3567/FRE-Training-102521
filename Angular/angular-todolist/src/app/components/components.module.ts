import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MainComponent, TodolistComponent, TodoListItemComponent],
  imports: [CommonModule, SharedModule],

  exports: [MainComponent, TodolistComponent, TodoListItemComponent],
})
export class ComponentsModule {}
