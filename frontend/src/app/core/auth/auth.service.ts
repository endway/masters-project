import { inject, Injectable, signal } from "@angular/core";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    user = signal<User | null>(null);
    route = inject(Router);

    login() {
        this.user.set({
            id: "rand-id",
            name: "Mystified Justice",
            email: "mystified.justice@gmail.com",
            role: "admin",
            groups: [],
        });
        this.route.navigate([""]);
    }

    logout() {
        this.user.set(null);
        this.route.navigate(["/groups"]);
    }
}