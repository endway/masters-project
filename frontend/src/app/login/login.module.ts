import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { loginRoutes } from "./login.routes";

@NgModule({
    declarations: [],
    imports: [
        FormComponent,
        CommonModule,
        RouterModule.forChild(loginRoutes),
    ],
    exports: [RouterModule],
})
export class LoginModule {
}
