import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HairPicTabsPage } from "../hair-pic-tabs/hair-pic-tabs";

/**
 * Generated class for the HairPicHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hair-pic-home",
  templateUrl: "hair-pic-home.html"
})
export class HairPicHomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  page2 = HairPicTabsPage;

  ionViewDidLoad() {
    console.log("ionViewDidLoad HairPicHomePage");
  }
}
