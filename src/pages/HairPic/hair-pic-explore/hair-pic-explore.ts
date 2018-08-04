import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HairPicAfroPage } from "../hair-pic-afro/hair-pic-afro";

/**
 * Generated class for the HairPicExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-hair-pic-explore",
  templateUrl: "hair-pic-explore.html"
})
export class HairPicExplorePage {
  searchQuery: string = "";
  items;
  result;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {
        picture: "assets/hair-pic/ready/afro-done.jpg",
        id: "afro",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Afro"
      },
      {
        picture: "assets/hair-pic/ready/cool.jpg",
        id: "cool",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Bushy Afro"
      },
      {
        picture: "assets/hair-pic/ready/fade.jpg",
        id: "fade",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Fade"
      },
      {
        picture: "assets/hair-pic/ready/curved-flattop.png",
        id: "curved-flattop",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Curved Flattop"
      },
      {
        picture: "assets/hair-pic/ready/traditional-mohawk.png",
        id: "traditional-mohawk",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Traditional Mohawk"
      },
      {
        picture: "assets/hair-pic/ready/thin-dreads.png",
        id: "thin-dreads",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Thin Dreads"
      },
      {
        picture: "assets/hair-pic/ready/pac.png",
        id: "pac",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "2pac"
      },
      {
        picture: "assets/hair-pic/ready/mohawk-small.jpg",
        id: "mohawk-small",
        barber: "Buzz Barber",
        cell: "(213) 513-8040",
        likes: "10",
        name: "Medium Mohawk"
      }
    ];
    this.result = this.items;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.result = this.items.filter(item => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExplorePage");
  }
  onInput(event) {
    console.log(event.target.value);
  }
  changePage(id) {
    this.navCtrl.push(HairPicAfroPage, { id: id });
  }
}
