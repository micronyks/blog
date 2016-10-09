import {Routes,RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about',    component: AboutComponent },
  
];

export const routing = RouterModule.forChild(routes);