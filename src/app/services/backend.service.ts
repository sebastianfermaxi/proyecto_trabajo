import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendUrl = 'http://localhost:333'; // URL de tu backend

  constructor(private http: HttpClient) { }

  // Ejemplo de método para obtener datos del backend
  getData(): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}`);
  }

  // Otros métodos para POST, PUT, DELETE, etc.

}
