import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Album} from "../../album";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {
    
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    })
    this.albums = this.albums.filter(album => album.id >= 1);
  }

  deleteAlbum(album: Album){
    fetch('https://jsonplaceholder.typicode.com/posts/'+album.id, {
      method: 'DELETE',
    }).then();

    album.id = 0;
    this.ngOnInit();
  }

  createAlbum(id:number, userId: number, title: string){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        id: id,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then();
  }
}
