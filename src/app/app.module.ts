import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./screens/login/login.component";
import { BackComponent } from "./screens/back/back.component";
import { OtpComponent } from "./screens/otp/otp.component";
import { BtnComponent } from "./components/btn/btn.component";
import { HomeComponent } from "./screens/home/home.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { UserTileComponent } from "./components/user-tile/user-tile.component";
import { RcvdTileComponent } from "./components/rcvd-tile/rcvd-tile.component";
import { SentTileComponent } from "./components/sent-tile/sent-tile.component";
import { CheckedContComponent } from "./components/checked-cont/checked-cont.component";
import { SideProfileComponent } from "./components/side-profile/side-profile.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms"; //
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackComponent,
    OtpComponent,
    BtnComponent,
    HomeComponent,
    TopBarComponent,
    UserTileComponent,
    RcvdTileComponent,
    SentTileComponent,
    CheckedContComponent,
    SideProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000, // Set the timeout duration for the toast

      tapToDismiss: false, // Disable closing the toast on click
    }),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
