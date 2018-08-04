import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { HairPicTabsPage } from "../hair-pic-tabs/hair-pic-tabs";
import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions
} from "../../../../node_modules/@ionic-native/camera-preview";

/**
 * Generated class for the HairPicTryOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hair-pic-try-out",
  templateUrl: "hair-pic-try-out.html"
})
export class HairPicTryOutPage {
  public picture;
  page2 = HairPicTabsPage;
  public images = [
    {
      id: "afro",
      url: "assets/hair-pic/ready/afro-done.png"
    },
    {
      id: "cool",
      url: "assets/hair-pic/ready/cool-x.png"
    },
    {
      id: "fade",
      url: "assets/hair-pic/ready/fade-x.png"
    }
  ];

  public id;
  public currentItem;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public cameraPreview: CameraPreview
  ) {
    this.id = this.navParams.get("id");
    this.currentItem = this.images.filter(item => {
      if (item.id === this.id) {
        return item;
      }
    });
    this.currentItem = this.currentItem[0];
    this.platform.ready().then(() => {
      // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: "front",
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      };
      //this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      //console.log(result);
      // do something with the result
      //});
      // start camera
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        res => {
          console.log("camera start");
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TryOutPage");
  }

  ionViewDidLeave() {
    console.log("camera stopped");
    this.cameraPreview.stopCamera();
  }
  logEvent(e) {
    console.log("will take picture");
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    };

    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then(
      imageData => {
        this.picture = "data:image/jpeg;base64," + imageData;
      },
      err => {
        console.log(err);
        this.picture = "assets/hair-pic/img/test.jpg";
      }
    );
  }

  pop() {
    this.navCtrl.pop();
  }
}
