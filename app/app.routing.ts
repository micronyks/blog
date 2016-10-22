import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemListComponent} from './home/item.component';

let routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
        path: "home",
        component: HomeComponent
  },
  { path: 'about', loadChildren: 'app/about/about.module' },
  { path:'tech', loadChildren:'app/tech/tech.module'},
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module' }
]

export const routing = RouterModule.forRoot(routes,{ useHash: true });