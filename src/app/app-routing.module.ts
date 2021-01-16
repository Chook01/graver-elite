import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OffersComponent } from './components/offers/offers.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ponuda', component: OffersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
