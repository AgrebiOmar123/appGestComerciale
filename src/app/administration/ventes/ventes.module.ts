import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './devis/devis.component';
import { FacturesVentesComponent } from './factures-ventes/factures-ventes.component';
import { BlTransportComponent } from './bl-transport/bl-transport.component';



@NgModule({
  declarations: [
    DevisComponent,
    FacturesVentesComponent,
    BlTransportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentesModule { }
