import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
@NgModule({
  imports: [CommonModule, SharedComponentsModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule {}
