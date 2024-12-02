import { Component } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    standalone: true,
    imports: [MatIcon, MatIconButton, RouterLink, RouterLinkActive],
    selector: "navigation-rail",
    templateUrl: "./navigation-rail.component.html",
    styleUrl: "./navigation-rail.component.scss",
    host: {
        class: "mp-nav-rail",
    },
})
export class NavigationRailComponent {}