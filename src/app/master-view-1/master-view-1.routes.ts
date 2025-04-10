import { Routes } from '@angular/router';

import { MasterView1Component } from './master-view-1.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildView1Component } from './child-view-1/child-view-1.component';

export const routes: Routes = [
  { path: '', component: MasterView1Component, children: [
      { path: '', redirectTo: 'child-view', pathMatch: 'full' },
      { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
      { path: 'child-view-1', component: ChildView1Component, data: { text: 'Child View 1' } }
    ]
  }
];
