import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HairPicHomePage } from './hair-pic-home';

@NgModule({
  declarations: [
    HairPicHomePage,
  ],
  imports: [
    IonicPageModule.forChild(HairPicHomePage),
  ],
})
export class HairPicHomePageModule {}
