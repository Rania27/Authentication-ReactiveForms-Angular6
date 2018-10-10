import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    CheckboxComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: 'checkbox', component: CheckboxComponent },
      { path: '', component: UserFormComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
