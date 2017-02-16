import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ LoaderComponent, ErrorMessageComponent ],
  exports: [ LoaderComponent, ErrorMessageComponent ]
})
export class SharedComponentsModule {}
