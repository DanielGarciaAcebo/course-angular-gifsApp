import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SeachComponent } from './seach/seach.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SeachComponent,
    ContentComponent
  ],
  exports:[
    GifsPageComponent,
    ContentComponent,
    SeachComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
