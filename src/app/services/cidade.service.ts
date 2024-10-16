import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cidade {
  id?: number;
  nome: string;
  estado: string;
  populacao: number;
  capital: boolean;
  clima: string; // Usado para radio button ou select
}

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  private apiUrl = 'http://localhost:3000/cidades';

  constructor(private http: HttpClient) { }

  getCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.apiUrl);
  }

  addCidade(cidade: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.apiUrl, cidade);
  }

  updateCidade(id: number, cidade: Cidade): Observable<Cidade> {
    return this.http.put<Cidade>(`${this.apiUrl}/${id}`, cidade);
  }

  deleteCidade(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
