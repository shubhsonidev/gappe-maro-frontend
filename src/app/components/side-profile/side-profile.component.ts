import { Component, Input } from "@angular/core";

@Component({
  selector: "app-side-profile",
  templateUrl: "./side-profile.component.html",
  styleUrls: ["./side-profile.component.scss"],
})
export class SideProfileComponent {
  @Input() data: any;
}
