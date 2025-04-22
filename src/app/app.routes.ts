import { Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: "start", component: StartComponent },
    { path: "convert", component: ConvertComponent },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "/start", pathMatch: "full"}
];
