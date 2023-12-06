import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonReceptionComponent } from './bon-reception/bon-reception.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { ReleveBLComponent } from './releve-bl/releve-bl.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';



@NgModule({
  declarations: [
    BonReceptionComponent,
    CommandeFournisseurComponent,
    ReleveBLComponent,
    FournisseursComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AchatsModule { }
