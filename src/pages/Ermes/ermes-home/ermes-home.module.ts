import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErmesHomePage } from './ermes-home';

@NgModule({
  declarations: [
    ErmesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ErmesHomePage),
  ],
})
export class ErmesHomePageModule {}
