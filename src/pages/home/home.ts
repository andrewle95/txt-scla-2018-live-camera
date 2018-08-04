import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { ErmesCameraPage } from "../Ermes/ermes-camera/ermes-camera";
import { HairPicTabsPage } from "../HairPic/hair-pic-tabs/hair-pic-tabs";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  projects = [
    {
      title: "Ermes",
      icon: "",
      description: "This app is good",
      component: ErmesCameraPage
    },
    {
      title: "Hair Pic",
      icon: "",
      description: "This app is good",
      component: HairPicTabsPage
    }
  ];

  constructor(public navCtrl: NavController) {
    console.log(this.projects);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  // hiddenCounter = 0;

  // hiddenHome() {
  //   this.hiddenCounter++;
  //   if (this.hiddenCounter >= 3) {
  //     this.navCtrl.setRoot(HomePage);
  //   }
  //   console.log("pressed " + this.hiddenCounter + " times");
  // }
}
