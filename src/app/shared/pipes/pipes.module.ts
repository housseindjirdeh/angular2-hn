import { NgModule } from '@angular/core';
import { CommentPipe } from './comment.pipe';

@NgModule({
  declarations: [CommentPipe],
  exports: [CommentPipe]
})
export class PipesModule {}
