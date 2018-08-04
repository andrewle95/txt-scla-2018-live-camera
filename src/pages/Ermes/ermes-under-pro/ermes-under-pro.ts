import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ErmesPageShoePage } from "../ermes-page-shoe/ermes-page-shoe";

/**
 * Generated class for the ErmesUnderProPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ermes-under-pro",
  templateUrl: "ermes-under-pro.html"
})
export class ErmesUnderProPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ErmesUnderProPage");
  }

  nextPageShoef() {
    this.navCtrl.push(ErmesPageShoePage);
  }
}
