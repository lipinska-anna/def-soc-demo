import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./../../libs/core/reports/src').then(m => m.REPORTS_ROUTES),
  },
];
