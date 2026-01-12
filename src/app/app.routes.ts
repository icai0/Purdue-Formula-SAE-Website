import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { TeamPage } from './team-page/team-page';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePage},
    {path: 'ourteam', component: TeamPage},
];
