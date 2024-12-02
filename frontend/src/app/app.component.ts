import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CoreModule } from "./core/core.module";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, CoreModule],
    template: "<router-outlet />",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "Masters Project";
}
