import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CataloguesRoutingModule } from './catalogues-routing.module';
import { CataloguesComponent } from './catalogues.component';
import { CollectionComponent } from './collection/collection.component';
import { InventaireComponent } from './inventaire/inventaire.component';


@NgModule({
  declarations: [
    CataloguesComponent,
    CollectionComponent,
    InventaireComponent
  ],
  imports: [
    CommonModule,
    CataloguesRoutingModule
  ]
})
export class CataloguesModule { }
