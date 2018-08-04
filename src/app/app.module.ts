import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

//Ermes
import { CameraPreview } from "@ionic-native/camera-preview";
import { AngularCropperjsModule } from "angular-cropperjs";
import { ErmesCameraPage } from "../pages/Ermes/ermes-camera/ermes-camera";
import { ErmesCameraPreviewPage } from "../pages/Ermes/ermes-camera-preview/ermes-camera-preview";
import { ErmesHomePage } from "../pages/Ermes/ermes-home/ermes-home";
import { ErmesInsolePage } from "../pages/Ermes/ermes-insole/ermes-insole";
import { ErmesPageShoePage } from "../pages/Ermes/ermes-page-shoe/ermes-page-shoe";
import { ErmesProInfoPage } from "../pages/Ermes/ermes-pro-info/ermes-pro-info";
import { ErmesSecondPage } from "../pages/Ermes/ermes-second/ermes-second";
import { ErmesShoeShowPage } from "../pages/Ermes/ermes-shoe-show/ermes-shoe-show";
import { ErmesUnderProPage } from "../pages/Ermes/ermes-under-pro/ermes-under-pro";
import { ErmesDataProvider } from "../providers/ermes-data/ermes-data";

//Hair Pic
import { HairPicAfroPage } from "../pages/HairPic/hair-pic-afro/hair-pic-afro";
import { HairPicBioPage } from "../pages/HairPic/hair-pic-bio/hair-pic-bio";
import { HairPicExplorePage } from "../pages/HairPic/hair-pic-explore/hair-pic-explore";
import { HairPicHomePage } from "../pages/HairPic/hair-pic-home/hair-pic-home";
import { HairPicTabsPage } from "../pages/HairPic/hair-pic-tabs/hair-pic-tabs";
import { HairPicTryOutPage } from "../pages/HairPic/hair-pic-try-out/hair-pic-try-out";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    //Ermes
    ErmesCameraPage,
    ErmesCameraPreviewPage,
    ErmesHomePage,
    ErmesInsolePage,
    ErmesPageShoePage,
    ErmesProInfoPage,
    ErmesSecondPage,
    ErmesShoeShowPage,
    ErmesUnderProPage,

    //HairPic
    FilterPipe,
    HairPicAfroPage,
    HairPicBioPage,
    HairPicExplorePage,
    HairPicHomePage,
    HairPicTabsPage,
    HairPicTryOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    AngularCropperjsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    //Ermes
    ErmesCameraPage,
    ErmesCameraPreviewPage,
    ErmesHomePage,
    ErmesInsolePage,
    ErmesPageShoePage,
    ErmesProInfoPage,
    ErmesSecondPage,
    ErmesShoeShowPage,
    ErmesUnderProPage,

    //HairPic
    HairPicAfroPage,
    HairPicBioPage,
    HairPicExplorePage,
    HairPicHomePage,
    HairPicTabsPage,
    HairPicTryOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ErmesDataProvider
  ]
})
export class AppModule {}
