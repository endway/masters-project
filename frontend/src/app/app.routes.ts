import { Routes } from "@angular/router";
import { LoginModule } from "./login";
import { AuthGuardService } from "./core/auth/auth-guard.service";
import { UserManagementModule } from "./user-management";
import { StatusModule } from "./status/status.module";
import { ProcessSetupModule } from "./process-setup/process-setup.module";
import { LayoutComponent } from "./shared/components/layout/layout.component";

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "groups" },
    { path: "login", pathMatch: "full", loadChildren: () => LoginModule },
    {
        path: "",
        pathMatch: "prefix",
        canActivate: [AuthGuardService],
        component: LayoutComponent,
        children: [
            { path: "groups", pathMatch: "prefix", canActivate: [AuthGuardService], loadChildren: () => UserManagementModule },
            { path: "status", pathMatch: "prefix", canActivate: [AuthGuardService], loadChildren: () => StatusModule },
            { path: "setup", pathMatch: "prefix", canActivate: [AuthGuardService], loadChildren: () => ProcessSetupModule },
        ],
    }
];
