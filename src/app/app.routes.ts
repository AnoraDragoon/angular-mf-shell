import { Routes } from "@angular/router";
import { HomeComponent } from "./web/home/home.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];
