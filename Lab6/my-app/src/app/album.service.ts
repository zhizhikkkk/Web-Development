import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Album, Photos} from "../album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  x: Observable<Album[]>;

  constructor(private http: HttpClient) { 
    this.x = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbums(): Observable<Album[]> {
    return this.x;
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>('https://jsonplaceholder.typicode.com/albums/'+id);
  }

  getPhotos(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/albums/'+id+'/photos');
  }

}

