import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HairPicExplorePage } from './hair-pic-explore';

@NgModule({
  declarations: [
    HairPicExplorePage,
  ],
  imports: [
    IonicPageModule.forChild(HairPicExplorePage),
  ],
})
export class HairPicExplorePageModule {}
