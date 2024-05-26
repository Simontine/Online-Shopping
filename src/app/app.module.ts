import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
// import { ChangePasswordComponent } from './components/change-password/change-password.component';

// import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    

   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule,
  ],
  providers: [],
})
export class AppModule { }
