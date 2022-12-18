import { Component, OnInit } from '@angular/core';
import {GifService} from "../services/gif-service.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit {

  get results(){
    return this.gifsService.result
  }

  constructor(private gifsService: GifService) {}

  ngOnInit(): void {
  }

}
