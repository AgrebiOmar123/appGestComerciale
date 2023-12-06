import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //{
    //path: 'catalogues',
    //loadChildren: () => import('./catalogues/catalogues.module').then(m => m.CataloguesModule)
 // },
  {path: 'statistics', component: StatisticsComponent},
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
