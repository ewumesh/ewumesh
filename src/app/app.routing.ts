import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/404/404.component';
import { AccessDeniedComponent } from './modules/404/access-denied/access-denied.component';
import { NotFoundComponent } from './modules/404/page-not-found.component';
import { AlwaysAuthGuard } from './route.guard';

const routes: Routes = [
    {path: 'login', loadChildren: () => import('./modules/authentication/login/login.module'). then(r => r.LoginModule)},
    {path: 'register', loadChildren: () => import('./modules/authentication/sign-up/sign-up.module'). then(r => r.SignUpModule)},
    {path: 'home', loadChildren: () => import('./modules/home/home.module'). then(r => r.HomeModule)},
    {path: 'profile', loadChildren: () => import('./modules/profile/profile.module'). then(r => r.ProfileModule)},
    {path: 'admin', children: [
		{path: 'team', canActivate: [AlwaysAuthGuard], loadChildren: () => import('./modules/admin/team/team.module').then(r => r.TeamModule)},
		{path: 'users',  loadChildren: () => import('./modules/admin/users/user.module').then(r => r.UserModule)},
		{path: 'blogs',canActivate: [AlwaysAuthGuard], loadChildren: () => import('./modules/admin/blog/blog.module').then(r => r.BlogModule)},
		{path: 'user-response',canActivate: [AlwaysAuthGuard], loadChildren: () => import('./modules/admin/user-response/user-response.module').then(r => r.UserResponseModule)},
	]},
	{path: 'blogs', loadChildren: () => import('./modules/blog-view/blog-view.module').then(b => b.BlogViewModule)},
	{path: 'contact', loadChildren: () => import('./modules/contact/contact-us.module').then(b => b.ContactUSModule)},
	{path: 'about', loadChildren: () => import('./modules/about/about.module').then(b => b.AboutModule)},
	{path: 'view', loadChildren: () => import('./modules/blog-view/individual/individual-view.module').then(b => b.IndividualViewModule)},
	{path: '404', component: PageNotFoundComponent},
	{path: 'notfound', component: NotFoundComponent},
	{path: 'access-denied', component: AccessDeniedComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: '404' },
	{ path: '*', redirectTo: 'notfound' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,{
			scrollPositionRestoration: 'enabled'
		  })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
