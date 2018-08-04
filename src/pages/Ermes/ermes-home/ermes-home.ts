import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ErmesSecondPage } from "../ermes-second/ermes-second";
import { ErmesCameraPage } from "../ermes-camera/ermes-camera";

/**
 * Generated class for the ErmesHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ermes-home",
  templateUrl: "ermes-home.html"
})
export class ErmesHomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  nextPage() {
    this.navCtrl.push(ErmesSecondPage);
  }

  load() {
    this.navCtrl.push(ErmesCameraPage);
  }
}
