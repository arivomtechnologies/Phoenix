import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Phoenix Labels & Printing | High-Tech Apparel Trims & DTF' },
  { path: 'capabilities', component: CapabilitiesComponent, title: 'Manufacturing Capabilities | Phoenix Labels' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Production Gallery & Samples | Phoenix Labels' },
  { path: 'quality', component: QualityComponent, title: 'Quality Standards & Lab Testing | Phoenix Labels' },
  { path: 'contact-us', component: ContactComponent, title: 'Contact & Quote Request | Phoenix Labels' },
  { path: '**', redirectTo: '' }
];
