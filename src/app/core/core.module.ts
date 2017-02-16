import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, SettingsComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
