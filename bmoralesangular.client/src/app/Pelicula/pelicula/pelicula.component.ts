import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-pelicula',
  standalone: false,
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  vistaActual: 'trending' | 'favoritas' = 'trending'
  EsFavorita!: boolean
  //peliculas = [
  //  { titulo: 'Inception', descripcion: '...', imagen: '...', id: 27205 },
  //  { titulo: 'Interstellar', descripcion: '...', imagen: '...', id: 157336 },
  //  { titulo: 'The Dark Knight', descripcion: '...', imagen: '...', id: 155 }
  //];
  peliculas = [
    {
      title: 'Inception',
      overview: '...',
      poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      id: 27205
    }
  ];

  constructor(private movie: MovieService) { }

  agregarFavoritos(peli: any) {
    const nuevoEstado = !peli.esFavorita;
    this.movie.MarcarFavorito(peli.id, nuevoEstado).subscribe({
      next: res => {
        peli.esFavorita = nuevoEstado;
        console.log('Marcada como favorita: ', res);
      },
      error: err => console.error('Error al marcar como favorita', err)
    });
  }

  favoritas: any[] = [];

  ngOnInit() {
    //this.movie.getFavoritas().subscribe({
    //  next: (res: any) => {
    //    this.favoritas = res.results;
    //  },
    //  error: err => console.error('Error al cargar favoritas:', err)
    //});
    this.CargarTrending()
  }

  CargarTrending() {
    this.movie.getTrending().subscribe({
      next: (res: any) => {
        this.favoritas = res.results.map((p: any) => ({
          id: p.id,
          title: p.title,
          overview: p.overview,
          poster_path: p.poster_path,
          esFavorita: false
        }));
      },
      error: err => console.error('Error al cargar trending:', err)
    });
  }

  cargarFavoritas() {
    this.movie.getFavoritas().subscribe({
      next: (res: any) => {
        this.favoritas = res.results.map((p: any) => ({
          id: p.id,
          title: p.title,
          overview: p.overview,
          poster_path: p.poster_path,
          esFavorita: true
        }));
      },
      error: err => console.error('Error al cargar favoritas:', err)
    });
  }

  toogleFavorito(peli:any) {
    const nuevoEstado = !peli.esFavorita;

    this.movie.MarcarFavorito(peli.id, nuevoEstado).subscribe({
      next: res => {
        peli.esFavorita = nuevoEstado;
        console.log('Favorito actualizado:', res);
      },
      error: err => console.error('Error al actualizar favorito:', err)
    });
  }

}
