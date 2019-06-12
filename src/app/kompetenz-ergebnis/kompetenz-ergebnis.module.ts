import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KompetenzErgebnisPage } from './kompetenz-ergebnis.page';

const routes: Routes = [
  {
    path: '',
    component: KompetenzErgebnisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KompetenzErgebnisPage]
})
export class KompetenzErgebnisPageModule {}
