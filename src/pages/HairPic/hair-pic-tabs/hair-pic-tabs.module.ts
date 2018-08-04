import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HairPicTabsPage } from './hair-pic-tabs';

@NgModule({
  declarations: [
    HairPicTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(HairPicTabsPage),
  ],
})
export class HairPicTabsPageModule {}
