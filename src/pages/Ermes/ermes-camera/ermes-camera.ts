import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { AngularCropperjsComponent } from "../../../../node_modules/angular-cropperjs";
import { ErmesHomePage } from "../ermes-home/ermes-home";
import { ErmesInsolePage } from "../ermes-insole/ermes-insole";
import { ErmesCameraPreviewPage } from "../ermes-camera-preview/ermes-camera-preview";
import { HomePage } from "../../home/home";

@IonicPage()
@Component({
  selector: "page-ermes-camera",
  templateUrl: "ermes-camera.html"
})
export class ErmesCameraPage {
  @ViewChild("angularCropper") public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;
  splash = true;
  myImage = null;
  scaleValX = 1;
  scalevalY = 1;

  pushPage;
  formPage;
  InsolePage: any;
  myphoto: any;
  showInsole: any;
  hiddenCounter = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.pushPage = ErmesHomePage;
    this.formPage = ErmesHomePage;
    this.InsolePage = ErmesInsolePage;
    this.showInsole = true;

    this.cropperOptions = {
      dragMode: "crop",
      aspectRatio: 0.5,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8
    };
    console.log(navParams.get("val"));
  }

  hiddenHome() {
    this.hiddenCounter++;
    if (this.hiddenCounter >= 10) {
      this.navCtrl.setRoot(HomePage);
    }
    console.log("pressed " + this.hiddenCounter + " times");
  }
  ionViewDidLoad() {
    setTimeout(() => (this.splash = false), 4000);
  }

  nextPage() {
    this.navCtrl.push(ErmesHomePage);
  }

  load3() {
    this.navCtrl.push(ErmesInsolePage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      subTitle:
        "A removable sole worn in a shoe for warmth, as a deodorizer, or to improve the fit",
      buttons: ["OK"]
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      subTitle:
        "The insole is the inside part of the shoe that runs underneath and supports the buttom of the foot",
      buttons: ["OK"]
    });
    alert.present();
  }

  showAlert3() {
    const alert = this.alertCtrl.create({
      subTitle:
        "Pronation occurs as the foot rolls inwards and the arch of the foot flattens, hense the term often used to descrube someone who over pronates",
      buttons: ["OK"]
    });
    alert.present();
  }

  //Image Cropping Stuff//

  captureImage() {
    this.navCtrl.push(ErmesCameraPreviewPage);
  }

  reset() {
    this.angularCropper.cropper.reset();
  }

  clear() {
    this.angularCropper.cropper.clear();
  }

  rotate() {
    this.angularCropper.cropper.rotate(90);
  }

  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }

  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }

  scaleY() {
    this.scalevalY = this.scalevalY * 1;
    this.angularCropper.cropper.scaleY(this.scaleY);
  }

  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }

  save() {
    let croppedImgB64String: string = this.angularCropper.cropper
      .getCroppedCanvas()
      .toDataURL("image/jpeg", 100 / 100);
    this.croppedImage = croppedImgB64String;
  }
}
