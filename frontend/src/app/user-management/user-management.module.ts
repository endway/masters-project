import { NgModule } from "@angular/core";
import { userManagementRoutes } from "./user-management.routes";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild(userManagementRoutes)],
})
export class UserManagementModule {}
