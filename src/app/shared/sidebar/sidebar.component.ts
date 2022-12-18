import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifService} from "../../gifs/services/gif-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild("txtSidebarSearch") txtSidebarSearch!:ElementRef<HTMLInputElement>

  constructor(private gifsService:GifService) { }
  get history(){
    return this.gifsService.history
  }

  search(term:string){

    this.gifsService.searchGifs(term)

    this.txtSidebarSearch.nativeElement.value= ""
  }

  ngOnInit(): void {
  }

}

