import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { processSetupRoutes } from "./process-setup.routes";
import { ProcessSetupComponent } from "./process-setup.component";

@NgModule({
    imports: [RouterModule.forChild(processSetupRoutes), ProcessSetupComponent],
})
export class ProcessSetupModule {}