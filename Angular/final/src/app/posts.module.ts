import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModeul } from "./angular-material.module";
import { CardComponent } from "./components/card/card.component";
import { PostListComponent } from "./components/post-list/post-list.component";
// import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
    declarations: [
        CardComponent,
        PostListComponent,
        // MessagesComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule, 
        AngularMaterialModeul,
        RouterModule,


     ]
})
export class PostModeul{}