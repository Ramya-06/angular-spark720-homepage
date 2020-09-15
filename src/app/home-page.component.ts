import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent {
  public selected: boolean = false;
  constructor(private router: Router, private iconRegistry: MatIconRegistry) {
    console.log("Home page");
  }
  name = "Angular " + VERSION.major;

  selectedCard(e: Event) {
    this.selected = true;

    this.router.navigate([".", {}]);
    console.log(e);
  }
}
