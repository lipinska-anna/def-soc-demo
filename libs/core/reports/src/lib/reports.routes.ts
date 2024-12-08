import { Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

export const REPORTS_ROUTES: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ReportsListComponent,
      },
    ],
  },
];