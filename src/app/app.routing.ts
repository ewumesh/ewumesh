import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'login', loadChildren: () => import('./modules/authentication/login/login.module'). then(r => r.LoginModule)},
    {path: 'register', loadChildren: () => import('./modules/authentication/sign-up/sign-up.module'). then(r => r.SignUpModule)},
    {path: 'home', loadChildren: () => import('./modules/home/home.module'). then(r => r.HomeModule)},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
