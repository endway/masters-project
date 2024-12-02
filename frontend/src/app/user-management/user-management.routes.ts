import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';

export const userManagementRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: GroupsComponent,
            },
            {
                path: ":groupId/users",
                component: UsersComponent,
            },
        ],
    }
];
