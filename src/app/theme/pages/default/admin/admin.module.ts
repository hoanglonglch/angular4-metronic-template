import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "../default.component";
import {AdminComponent} from "./admin.component";
import {ManagementComponent} from "./management/management.component";
import {LayoutModule} from "../../../layouts/layout.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {DataTableModule} from "primeng/primeng";



const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: AdminComponent,
        children: [
          {path:'management', component: ManagementComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    LayoutModule,
    FormsModule,

    // import primeNG
    DataTableModule
  ], declarations: [
    AdminComponent,
    ManagementComponent,
  ]
})

export class AdminModule {
}