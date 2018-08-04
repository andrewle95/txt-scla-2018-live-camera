import { Component } from "@angular/core";
import { App, IonicPage, NavController, NavParams } from "ionic-angular";
import { HairPicTryOutPage } from "../hair-pic-try-out/hair-pic-try-out";
import { HomePage } from "../../home/home";

/**
 * Generated class for the HairPicBioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hair-pic-bio",
  templateUrl: "hair-pic-bio.html"
})
export class HairPicBioPage {
  public pics = [];
  public savedPics = [];
  public saved = false;
  public single = false;
  public double = true;
  hiddenCounter = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App
  ) {
    this.loadPics();
    this.loadSavedPics();
  }

  hiddenHome() {
    this.hiddenCounter++;
    if (this.hiddenCounter >= 3) {
      this.app.getRootNav().setRoot(HomePage);
    }
    console.log("pressed " + this.hiddenCounter + " times");
  }

  ionViewDidLoad() {
    this.loadPics();
    this.loadSavedPics();
    console.log("ionViewDidLoad BioPage");
    console.log(this.double);
  }

  loadPics() {
    this.pics = [
      "assets/hair-pic/bio/1.png",
      "assets/hair-pic/bio/2.jpg",
      "assets/hair-pic/bio/3.png",
      "assets/hair-pic/bio/4.jpg",
      "assets/hair-pic/bio/5.png",
      "assets/hair-pic/bio/6.jpg"
    ];
  }

  goToHaircut() {
    console.log("button was clicked");
    this.navCtrl.push(HairPicTryOutPage);
  }

  loadSavedPics() {
    this.savedPics = [
      {
        url:
          "https://ath.unileverservices.com/wp-content/uploads/sites/4/2016/06/insta-llcooldrae.png",
        id: "afro1"
      },
      {
        url: "assets/hair-pic/pics/placeholder.jpg",
        id: "afro2"
      },
      {
        url: "assets/hair-pic/pics/placeholder.jpg",
        id: "afro3"
      }
    ];
  }

  viewSingle() {
    this.double = false;
    this.saved = false;
    this.single = true;
  }

  viewDouble() {
    this.single = false;
    this.saved = false;
    this.double = true;
  }

  viewSavedPics() {
    this.single = false;
    this.double = false;
    this.saved = true;
  }

  viewCamera(id) {
    this.navCtrl.push(HairPicTryOutPage, { id: id });
  }
}
