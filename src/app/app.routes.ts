import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {
        path: '',
        // redirectTo: 'login',
        redirectTo: 'products',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component:LoginComponent
    },

    {
        path:'register',
        component:RegisterComponent
    },

    {
        path: 'home',
        component:LandingPageComponent
    },

    {
        path: 'products',
        component:ProductsComponent
    }
];
