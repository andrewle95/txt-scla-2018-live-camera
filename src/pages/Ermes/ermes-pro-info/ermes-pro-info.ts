import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ErmesShoeShowPage } from "../ermes-shoe-show/ermes-shoe-show";

/**
 * Generated class for the ErmesProInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ermes-pro-info",
  templateUrl: "ermes-pro-info.html"
})
export class ErmesProInfoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ErmesProInfoPage");
  }

  nextPageShoe() {
    this.navCtrl.push(ErmesShoeShowPage);
  }
}
