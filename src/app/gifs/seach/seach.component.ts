import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifService} from "../services/gif-service.service";

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
})
export class SeachComponent implements OnInit {

  @ViewChild("txtSearch") txtSearch!:ElementRef<HTMLInputElement>
  constructor(private gifsService:GifService) {}

  search( term: string){
    const value = this.txtSearch.nativeElement.value

    this.gifsService.searchGifs(value)

    this.txtSearch.nativeElement.value= ""
  }

  ngOnInit(): void {
  }
}
