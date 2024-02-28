import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'flights',
        loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    },
    {
        path: 'remote',
        loadChildren: () => import('remote/Module').then(m => m.TestRemoteModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
