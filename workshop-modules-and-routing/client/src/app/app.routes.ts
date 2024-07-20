import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FrontendInformationComponent } from './frontend-information/frontend-information.component';
import { BackendInformationComponent } from './backend-information/backend-information.component';
import { DesignerInformationComponent } from './designer-information/designer-information.component';
import { MainComponent } from './core/main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'frontend-information', component: FrontendInformationComponent },
    { path: 'backend-information', component: BackendInformationComponent },
    { path: 'designer-information', component: DesignerInformationComponent },

];