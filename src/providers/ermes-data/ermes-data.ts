import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/*
  Generated class for the ErmesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErmesDataProvider {
  public myData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    "hello world"
  ]);

  constructor() {
    console.log("Hello ErmesDataProvider Provider");
  }

  addData(pic) {
    this.myData.next([pic]);
  }
}
