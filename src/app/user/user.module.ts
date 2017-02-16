import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';


const routes: Routes = [
  {
    path: ':id',
    component: UserComponent
  }
]


@NgModule({
  imports: [CommonModule, SharedComponentsModule, RouterModule.forChild(routes)],
  declarations: [UserComponent],
  exports: [UserComponent, RouterModule]
})
export class UserModule {}
