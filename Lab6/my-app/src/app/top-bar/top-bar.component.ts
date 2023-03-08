import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private location: Location) {
  }
  goBack(){
    this.location.back();
  }
}
