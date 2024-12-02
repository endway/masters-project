import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";

import { GroupId } from "../../core/auth/group.model";
import { User } from "../../core/auth/user.model";
import { UsersRepository } from "../services/users.repository";

@Component({
    standalone: true,
    imports: [
        MatIcon,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
    ],
    providers: [UsersRepository],
    selector: "users",
    templateUrl: "./users.component.html",
    styles: [
        ":host { display: flex; flex-direction: column; }",
        "layout { flex: 1 1 auto; }",
    ],
})
export class UsersComponent implements OnInit {
    protected displayedColumns: Array<string> = ['name', 'email', 'actions'];
    protected dataSource = new MatTableDataSource<User>();

    private repository = inject(UsersRepository);
    private route = inject(ActivatedRoute);

    get groupId(): GroupId {
        return this.route.snapshot.paramMap.get("groupId") as GroupId;
    }

    ngOnInit() {
        this.fetchUsers();
    }

    addUser() {
        // Open a dialog to add a new user
        // const dialogRef = this.dialog.open(AddUserDialogComponent, {
        // });
    }

    editUser(user: User) {
        // Open a dialog to edit the user
        // const dialogRef = this.dialog.open(EditUserDialogComponent, {
        //     // ... dialog configuration, pass the user as data
        // });
    }

    deleteUser(user: User) {
        this.repository.remove(user).subscribe(() => this.fetchUsers());
    }

    private fetchUsers() {
        this.repository.getAll().subscribe((users) => {
            this.dataSource.data = users.filter((user) => !this.groupId || user.groups?.includes(this.groupId));
        });
    }
}
