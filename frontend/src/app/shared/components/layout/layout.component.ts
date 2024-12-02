import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavigationRailComponent } from "../navigation-rail/navigation-rail.component";

@Component({
    standalone: true,
    imports: [NavigationRailComponent, RouterOutlet],
    selector: "layout",
    templateUrl: "./layout.component.html",
    styleUrl: "./layout.component.scss",
    host: {
        class: "mp-layout",
    },
})
export class LayoutComponent {}
