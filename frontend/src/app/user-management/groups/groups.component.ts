import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { RouterLink } from "@angular/router";

import { Group } from "../../core/auth/group.model";
import { GroupsRepository } from "../services/groups.repository";
import { GroupFormComponent } from "./group-form/group-form.component";

@Component({
    standalone: true,
    imports: [
        MatIcon,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        RouterLink,
    ],
    providers: [GroupsRepository],
    selector: "groups",
    templateUrl: "./groups.component.html",
    styles: [
        ":host { display: flex; flex-direction: column; }",
        "layout { flex: 1 1 auto; }",
    ],
})
export class GroupsComponent implements OnInit {
    protected displayedColumns: Array<string> = ["name", "actions"];
    protected dataSource = new MatTableDataSource<Group>();

    private repository = inject(GroupsRepository);
    private dialog = inject(MatDialog);

    ngOnInit() {
        this.fetchGroups();
    }

    addGroup() {
        // Open a dialog to add a new user
        const dialogRef = this.dialog.open(GroupFormComponent, {
        });
    }

    deleteGroup(group: Group) {
        this.repository.remove(group).subscribe(() => this.fetchGroups());
    }

    private fetchGroups() {
        this.repository.getAll().subscribe((groups) => {
            this.dataSource.data = groups;
        });
    }
}
