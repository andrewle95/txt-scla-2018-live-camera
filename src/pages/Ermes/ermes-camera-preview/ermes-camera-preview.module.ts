import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErmesCameraPreviewPage } from './ermes-camera-preview';

@NgModule({
  declarations: [
    ErmesCameraPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ErmesCameraPreviewPage),
  ],
})
export class ErmesCameraPreviewPageModule {}
