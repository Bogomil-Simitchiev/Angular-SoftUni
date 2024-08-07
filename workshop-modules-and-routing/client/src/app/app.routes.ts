import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FrontendInformationComponent } from './frontend-information/frontend-information.component';
import { BackendInformationComponent } from './backend-information/backend-information.component';
import { DesignerInformationComponent } from './designer-information/designer-information.component';
import { MainComponent } from './core/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { EmployeeDetailsComponent } from './core/main/employee-details/employee-details.component';

const registerRoute = {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
}

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'DVB Company' },
    { path: 'employees', component: MainComponent, title: 'Employees' },
    { path: 'employees/:id', component: EmployeeDetailsComponent, title: 'Details' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: 'frontend-information', component: FrontendInformationComponent },
    { path: 'backend-information', component: BackendInformationComponent },
    { path: 'designer-information', component: DesignerInformationComponent },
    registerRoute

];