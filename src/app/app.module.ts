import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { VenteComponent } from './vente/vente.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    VenteComponent,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

// code hidden for display purpose