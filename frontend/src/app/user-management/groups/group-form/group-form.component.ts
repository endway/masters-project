import { NgFor } from "@angular/common";
import { Component, inject, model, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import {
    MatDialogActions,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle,
} from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { User, UserId } from "../../../core/auth/user.model";
import { UsersRepository } from "../../services/users.repository";
import { MatButton } from "@angular/material/button";

export interface GroupFormData {
    name: string;
    users: Array<UserId>;
}

@Component({
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatOption,
        MatSelectModule,
        MatInputModule,
        NgFor,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        FormsModule,
    ],
    selector: "group-form",
    templateUrl: "./group-form.component.html",
    styles: [
        "mat-dialog-content { display: flex; flex-direction: column; }"
    ],
    providers: [UsersRepository],
})
export class GroupFormComponent implements OnInit {
    protected name = model<string>("");
    protected users = model<Array<UserId>>([]);
    protected availableUsers = model<Array<User>>([]);

    private dialogRef = inject(MatDialogRef<GroupFormComponent, GroupFormData>);
    private usersRepository = inject(UsersRepository);

    ngOnInit() {
        this.usersRepository
            .getAll()
            .subscribe((users) => this.availableUsers.set(users));
    }

    protected add() {
        this.dialogRef.close({
            name: this.name,
            users: this.users,
        });
    }
}
