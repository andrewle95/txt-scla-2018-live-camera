import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HairPicExplorePage } from "../hair-pic-explore/hair-pic-explore";
import { HairPicBioPage } from "../hair-pic-bio/hair-pic-bio";

/**
 * Generated class for the HairPicTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hair-pic-tabs",
  templateUrl: "hair-pic-tabs.html"
})
export class HairPicTabsPage {
  tab2Root = HairPicExplorePage;
  tab1Root = HairPicBioPage;

  constructor() {}

  tabChanged(ev) {
    console.log("tab change");
    console.log(ev.tabIcon);
    if (ev.tabIcon === "globe") {
      console.log("set root");
      ev.setRoot(HairPicExplorePage);
    }
  }
}
