import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StatusComponent } from "./status.component";
import { statusRoutes } from "./status.routes";

@NgModule({
    imports: [RouterModule.forChild(statusRoutes), StatusComponent],
})
export class StatusModule {}
