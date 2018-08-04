import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HairPicTryOutPage } from "../hair-pic-try-out/hair-pic-try-out";

/**
 * Generated class for the HairPicAfroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hair-pic-afro",
  templateUrl: "hair-pic-afro.html"
})
export class HairPicAfroPage {
  page3 = HairPicTryOutPage;
  public id;
  public currentItem;
  public items = [
    {
      picture: "assets/hair-pic/ready/afro-done.jpg",
      id: "afro",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Afro",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/cool.jpg",
      id: "cool",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Bushy Afro",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/fade.jpg",
      id: "fade",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Fade",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/curved-flattop.png",
      id: "curved-flattop",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Curved Flattop",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/traditional-mohawk.png",
      id: "traditional-mohawk",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Traditional Mohawk",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/thin-dreads.png",
      id: "thin-dreads",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Thin Dreads",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/pac.png",
      id: "pac",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: "10",
      name: "2pac",
      msg: 3
    },
    {
      picture: "assets/hair-pic/ready/mohawk-small.jpg",
      id: "mohawk-small",
      barber: "Buzz Barber",
      cell: "(213) 513-8040",
      likes: 10,
      name: "Medium Mohawk",
      msg: 3
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get("id");
    this.currentItem = this.items.filter(item => {
      if (item.id === this.id) {
        return item;
      }
    });
    this.currentItem = this.currentItem[0];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AfroPage");
  }

  openPage() {
    this.navCtrl.push(HairPicTryOutPage);
  }

  try(id) {
    this.navCtrl.push(HairPicTryOutPage, { id: id });
  }
}
