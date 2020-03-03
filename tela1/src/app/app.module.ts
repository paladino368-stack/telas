import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pag1Component } from './pag1/pag1.component';



@NgModule({
   declarations: [
      AppComponent,
      Pag1Component,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ModalModule.forRoot(),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
