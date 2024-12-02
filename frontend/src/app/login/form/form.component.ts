import { Component, inject, model } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle
} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AuthService } from "../../core/auth/auth.service";

@Component({
    selector: "login-form",
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
    ],
    templateUrl: "./form.component.html",
    styleUrl: "./form.component.scss"
})
export class FormComponent {
    protected readonly email = model<string>("");
    protected readonly password = model<string>("");

    private readonly auth = inject(AuthService);

    protected login() {
        this.auth.login();
    }
}
