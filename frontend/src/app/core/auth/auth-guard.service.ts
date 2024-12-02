import { inject, Injectable } from "@angular/core";
import { CanActivate, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuardService implements CanActivate {
    private auth = inject(AuthService);
    private route = inject(Router);

    canActivate(): MaybeAsync<GuardResult> {
        if (this.auth.user()) {
            return true;
        }

        this.route.navigate(["/groups"]);
        return false;
    }
}