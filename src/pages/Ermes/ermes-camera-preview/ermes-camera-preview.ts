import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  AlertController
} from "ionic-angular";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from "@ionic-native/camera-preview";
import { ErmesDataProvider } from "../../../providers/ermes-data/ermes-data";
import { ErmesInsolePage } from "../ermes-insole/ermes-insole";

/**
 * Generated class for the ErmesCameraPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ermes-camera-preview",
  templateUrl: "ermes-camera-preview.html"
})
export class ErmesCameraPreviewPage {
  public base64Image: string;

  //public photos: any;

  myphoto: any;
  showInsole: any;
  imageURL;

  constructor(
    public platform: Platform,
    public cameraPreview: CameraPreview,
    public navCtrl: NavController,
    public dataProvider: ErmesDataProvider,
    private alertCtrl: AlertController
  ) {
    this.showInsole = false;
  }

  ionViewDidLoad() {
    console.log("load preview");
    this.platform.ready().then(() => {
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: "rear",
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      };

      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        res => {
          console.log("camera on");
          console.log(res);
        },
        err => {
          console.log("camera error");
          console.log(err);
        }
      );
    });
  }

  ionViewWillLeave() {
    console.log("leave");
    this.cameraPreview.stopCamera();
  }

  takePicture() {
    this.cameraPreview.takePicture().then(data => {
      this.imageURL = "data:image/jpeg;base64," + data;
      this.showInsole = true;

      this.dataProvider.addData(this.imageURL);
      this.navCtrl.push(ErmesInsolePage);
    });
  }

  loadP() {
    this.navCtrl.push(ErmesInsolePage);
  }

  showAlert20() {
    const alert = this.alertCtrl.create({
      subTitle: "Tap two or three buttons that hover over your foot imprint",
      buttons: ["OK"]
    });
    alert.present();
  }
}
