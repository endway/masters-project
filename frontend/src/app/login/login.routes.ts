import { Routes } from '@angular/router';
import { FormComponent } from "./form/form.component";

export const loginRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: FormComponent,
            }
        ],
    }
];
