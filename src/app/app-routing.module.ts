import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  { path: 'kompetenz', loadChildren: './kompetenz/kompetenz.module#KompetenzPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'daten', loadChildren: './daten/daten.module#DatenPageModule' },
  { path: 'setoolbox', loadChildren: './setoolbox/setoolbox.module#SEToolboxPageModule' },
  { path: 'bamethoden', loadChildren: './bamethoden/bamethoden.module#BAMethodenPageModule' },
  { path: 'leitfaden', loadChildren: './leitfaden/leitfaden.module#LeitfadenPageModule' },
  { path: 'workflow', loadChildren: './workflow/workflow.module#WorkflowPageModule' },
  { path: 'kompetenz-ergebnis', loadChildren: './kompetenz-ergebnis/kompetenz-ergebnis.module#KompetenzErgebnisPageModule' },
  { path: 'kompetenz-framing', loadChildren: './kompetenz-framing/kompetenz-framing.module#KompetenzFramingPageModule' },
  { path: 'kompetenz-allocation', loadChildren: './kompetenz-allocation/kompetenz-allocation.module#KompetenzAllocationPageModule' },
  { path: 'kompetenz-analytics', loadChildren: './kompetenz-analytics/kompetenz-analytics.module#KompetenzAnalyticsPageModule' },
  { path: 'kompetenz-preparation', loadChildren: './kompetenz-preparation/kompetenz-preparation.module#KompetenzPreparationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
