import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { InventaireComponent } from './inventaire/inventaire.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionComponent
  },
  {
    path: 'inventaire',
    component: InventaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CataloguesRoutingModule { }
