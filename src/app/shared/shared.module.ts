import { NgModule } from '@angular/core';
import { HtmlDecodePipe } from './html-decode.pipe';
import { ThumbToFullPipe } from './thumb-to-full.pipe';

@NgModule({
  declarations: [
    HtmlDecodePipe,
    ThumbToFullPipe,
  ],
  imports: [],
  exports: [
    HtmlDecodePipe,
    ThumbToFullPipe
  ]
})
export class SharedModule { }
