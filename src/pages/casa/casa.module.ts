import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasaPage } from './casa';

@NgModule({
  declarations: [
    CasaPage,
  ],
  imports: [
    IonicPageModule.forChild(CasaPage),
  ],
})
export class CasaPageModule {}
