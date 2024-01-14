// tile-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tile } from 'src/app/tile/tile.model';

@Injectable(
  {
  providedIn: 'root'
})
export class TileDataService {
  //apiUrl: string;
  
  constructor(public http: HttpClient) {
    //this.apiUrl = 'localhost:8080/pharmacy/medicinesList'; // Replace with your API URL
  }

  private apiUrl = 'http://localhost:8080/api/medicinesList'; // Replace with your API URL

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>(this.apiUrl);
  }  
}
