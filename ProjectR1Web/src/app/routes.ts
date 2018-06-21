import { Routes } from '@angular/router';
import { ListAssetComponent } from '@pages/list-asset';

export const ROUTES: Routes = [
  { path: '', component: ListAssetComponent, pathMatch: 'full', data: {} },
];
