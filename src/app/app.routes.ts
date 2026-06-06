import { Routes } from '@angular/router';
import { HomeComponent } from './features/landing/home/home.component';
import { BooksComponent } from './features/landing/books/books.component';
import { AboutComponent } from './features/landing/about/about.component';
import { ContactComponent } from './features/landing/contact/contact.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'books', component: BooksComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'services', redirectTo: '' }, // Redirect services to home page
];
