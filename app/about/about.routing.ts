import {Routes,RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {About1Component} from './about1.component';
const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'detail/:id', component: About1Component},
  { path: 'about1', component: About1Component},
];

export const routing = RouterModule.forChild(routes);