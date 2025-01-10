import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Routes } from '@angular/router';
import { HomeComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'payment',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'payment',
        exposedModule: './Module',
      }).then((m) => m.PaymentModule),
  },
  {
    path: 'insurance',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'insurance',
        exposedModule: './Module',
      }).then((m) => m.InsuranceModule),
  },
];
