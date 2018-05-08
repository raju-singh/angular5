import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { ConfigService } from './services/app.service';
import { AppDirective } from './directive/app.directive';
import { trRow } from './directive/app.trRows';
import { modalDirective } from './directive/app.modal';
import { dateFormat } from './pipes/app.pipes';
import { categoryPipe } from './pipes/app.pipes';



const appRoutes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,ContactUsComponent,dateFormat,categoryPipe,HomeComponent, ProductComponent, NavBarComponent, modalDirective, trRow, AppDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
