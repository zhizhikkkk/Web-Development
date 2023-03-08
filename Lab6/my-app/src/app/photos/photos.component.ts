import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {Photos} from "../../album";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos: Photos[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService,) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getPhotos(id).subscribe((photos: Photos[]) => {
        this.photos = photos;
      })
    })
  }
}
