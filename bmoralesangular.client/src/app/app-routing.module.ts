import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Header/home/home.component';
import { CalculadoraComponent } from './Calculadora/calculadora/calculadora.component';
import { RandomuserComponent } from './RandomUser/randomuser/randomuser.component';
import { PeliculaComponent } from './Pelicula/pelicula/pelicula.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'randomuser', component: RandomuserComponent },
  {path: 'pelicula', component:PeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
