import {Routes,RouterModule} from '@angular/router';
import {TechComponent} from './tech.component';
import {Angular2Component} from './angular2/angular2.component';
import {DotNetComponent} from './dotnet/dotnet.component';
const routes: Routes = [
  { path: '', component: TechComponent,
    children:[
      { path: '',component: Angular2Component},
       {path:'dotnet',component:DotNetComponent,pathMatch: 'prefix'}
    ]
  }
];

export const routing = RouterModule.forChild(routes);