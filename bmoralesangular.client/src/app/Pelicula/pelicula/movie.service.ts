import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'b1e1c27e8f46d138c03b0b7c9f0a3460';
  private sessionId = 'bb7b37f79c699d1f180f8fb739aca09e02308a4e';
  private accountId = '22302937';
  constructor(private http: HttpClient) { }

  MarcarFavorito(IdPeli: number, favorito:boolean) {
    const url = `https://api.themoviedb.org/3/account/${this.accountId}/favorite?api_key=${this.apiKey}&session_id=${this.sessionId}`;
    const body = {
      media_type: 'movie',
      media_id: IdPeli,
      favorite: true
    };
    return this.http.post(url, body);
  }

  getFavoritas() {
    const url = `https://api.themoviedb.org/3/account/${this.accountId}/favorite/movies?api_key=${this.apiKey}&session_id=${this.sessionId}`;
    return this.http.get(url);
  }

  getTrending() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`
    return this.http.get(url);
  }
}
