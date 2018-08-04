import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { CameraPreview } from "../../../../node_modules/@ionic-native/camera-preview";
import { ErmesDataProvider } from "../../../providers/ermes-data/ermes-data";
import { ErmesHomePage } from "../ermes-home/ermes-home";
import { ErmesProInfoPage } from "../ermes-pro-info/ermes-pro-info";
import { ErmesUnderProPage } from "../ermes-under-pro/ermes-under-pro";

/**
 * Generated class for the ErmesInsolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ermes-insole",
  templateUrl: "ermes-insole.html"
})
export class ErmesInsolePage {
  Home;
  pageone = false; //Overpronation Page//
  pagetwo = false; //Underpronation Page//
  pagethree = false; //Normal Pronation//
  selected = [];
  public foot;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    cameraPreview: CameraPreview,
    public dataProvider: ErmesDataProvider
  ) {
    this.Home = ErmesHomePage;
  }

  showAlert20() {
    const alert = this.alertCtrl.create({
      subTitle: "Tap two or three buttons that hover over your foot imprint",
      buttons: ["OK"]
    });
    alert.present();
  }

  nextPage() {
    this.navCtrl.push(ErmesProInfoPage);
  }

  nextPageP() {
    this.navCtrl.push(ErmesUnderProPage);
  }

  ionViewDidLoad() {
    this.dataProvider.myData.subscribe(data => {
      this.foot = data[0];
    });
    console.log("ionViewDidLoad InsolePage");
  }

  ifButton(letter) {
    console.log(letter);
    let position = this.selected.indexOf(letter);
    if (position == -1) {
      this.selected.push(letter);
    } else {
      this.selected.splice(position, 1);
    }
    this.analyze();
  }

  analyze() {
    if (
      this.selected.indexOf("C") != -1 &&
      this.selected.indexOf("B") != -1 &&
      this.selected.length == 2
    ) {
      this.pageone = true;
      this.pagetwo = false;
      this.pagethree = false;
    }
    if (
      this.selected.indexOf("C") != -1 &&
      this.selected.indexOf("A") != -1 &&
      this.selected.length == 2
    ) {
      this.pageone = false;
      this.pagetwo = true;
      this.pagethree = false;
    }

    if (
      this.selected.indexOf("D") != -1 &&
      this.selected.indexOf("A") != -1 &&
      this.selected.length == 2
    ) {
      this.pageone = false;
      this.pagetwo = true;
      this.pagethree = false;
    }
    if (
      this.selected.indexOf("E") != -1 &&
      this.selected.indexOf("A") != -1 &&
      this.selected.length == 2
    ) {
      this.pageone = false;
      this.pagetwo = false;
      this.pagethree = true;
    }
    if (
      this.selected.indexOf("B") != -1 &&
      this.selected.indexOf("A") != -1 &&
      this.selected.indexOf("D") != -1 &&
      this.selected.length == 3
    ) {
      this.pageone = false;
      this.pagetwo = true;
      this.pagethree = false;
    }
    if (
      this.selected.indexOf("B") != -1 &&
      this.selected.indexOf("A") != -1 &&
      this.selected.indexOf("C") != -1 &&
      this.selected.length == 3
    ) {
      this.pageone = true;
      this.pagetwo = false;
      this.pagethree = false;
    }
  }
}
