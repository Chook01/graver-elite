import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OffersComponent } from './components/offers/offers.component';
import { StaticComponent } from './components/static/static.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ponuda', component: OffersComponent },
  { path: 'page/:static_page', component: StaticComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // or 'top'
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
