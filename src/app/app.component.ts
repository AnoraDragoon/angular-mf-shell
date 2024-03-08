import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './configs/config';
import { Router } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './configs/routes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'shell';

    remotes: CustomRemoteConfig[] = [];

    constructor(
        private router: Router) {
    }

    async ngOnInit(): Promise<void> {
        const manifest = getManifest<CustomManifest>();

        // Hint: Move this to an APP_INITIALIZER
        //  to avoid issues with deep linking
        const routes = buildRoutes(manifest);
        this.router.resetConfig(routes);

        this.remotes = Object.values(manifest);
    }
}
