import { Routes } from '@angular/router';

import { MasterView2Component } from './master-view-2.component';
import { ChildView2Component } from './child-view-2/child-view-2.component';
import { ChildView3Component } from './child-view-3/child-view-3.component';

export const routes: Routes = [
  { path: '', component: MasterView2Component, children: [
      { path: '', redirectTo: 'child-view-2', pathMatch: 'full' },
      { path: 'child-view-2', component: ChildView2Component, data: { text: 'Child View 2' } },
      { path: 'child-view-3', component: ChildView3Component, data: { text: 'Child View 3' } }
    ]
  }
];
