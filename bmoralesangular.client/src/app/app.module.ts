import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { CalculadoraComponent } from './Calculadora/calculadora/calculadora.component';
import { HomeComponent } from './Header/home/home.component';
import { RandomuserComponent } from './RandomUser/randomuser/randomuser.component';
import { PeliculaComponent } from './Pelicula/pelicula/pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculadoraComponent,
    HomeComponent,
    RandomuserComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
