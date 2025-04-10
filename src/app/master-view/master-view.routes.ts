import { Routes } from '@angular/router';

import { MasterViewComponent } from './master-view.component';
import { View1Component } from './view-1/view-1.component';
import { View2Component } from './view-2/view-2.component';
import { View3Component } from './view-3/view-3.component';

export const routes: Routes = [
  { path: '', component: MasterViewComponent, children: [
      { path: '', redirectTo: 'view-1', pathMatch: 'full' },
      { path: 'view-1', component: View1Component, data: { text: 'View 1' } },
      { path: 'view-2', component: View2Component, data: { text: 'View 2' } },
      { path: 'view-3', component: View3Component, data: { text: 'View 3' } }
    ]
  }
];
