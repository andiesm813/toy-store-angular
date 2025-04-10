import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master-View' } },
  { path: 'master-view-1', loadChildren: () => import('./master-view-1/master-view-1.routes').then(m => m.routes), data: { text: 'Master-View1' } },
  { path: 'master-view-2', loadChildren: () => import('./master-view-2/master-view-2.routes').then(m => m.routes), data: { text: 'Master-View2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
