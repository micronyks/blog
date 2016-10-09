import {Routes,RouterModule} from '@angular/router';
import {TechComponent} from './tech.component';
import {Angular2Component} from './angular2/angular2.component';
import {DotNetComponent} from './dotnet/dotnet.component';
const routes: Routes = [
  { path: '', redirectTo: 'tech', pathMatch: 'full',
    children:[
      { path: '', redirectTo: 'angular2/2/3', pathMatch: 'full'},
      { path: 'angular2/:id/:id', component: Angular2Component},
      {path:'dotnet',component:DotNetComponent}
    ]
  },
  { path: 'tech',    component: TechComponent, 
    children:[
      { path: '', redirectTo: 'angular2/2/3', pathMatch: 'full'},
      { path: 'angular2/:id/:number', component: Angular2Component},
      {path:'dotnet',component:DotNetComponent}
    ] 
    
  },
];

export const routing = RouterModule.forChild(routes);