import { NgModule } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from "./auth/auth-guard.service";

@NgModule({
    providers: [AuthService, AuthGuardService],
})
export class CoreModule {}