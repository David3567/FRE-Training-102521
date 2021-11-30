import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { ValidatorintemplateformComponent } from './validatorintemplateform/validatorintemplateform.component';
import { AsyncvalidatorComponent } from './asyncvalidator/asyncvalidator.component';
import { CrossfieldvalidationComponent } from './crossfieldvalidation/crossfieldvalidation.component';
import { SetvalidatorComponent } from './setvalidator/setvalidator.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomvalidatorComponent,
    ValidatorintemplateformComponent,
    AsyncvalidatorComponent,
    CrossfieldvalidationComponent,
    SetvalidatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
