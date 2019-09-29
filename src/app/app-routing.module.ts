import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { CamelAndDateComponent } from './camel-and-date/camel-and-date.component';

const routes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'camel', component: CamelAndDateComponent },
    { path: 'tests', component: TestListComponent },
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: '**', redirectTo: 'app', pathMatch: 'full'},
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
