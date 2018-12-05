import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'home/:id', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'animals',
    loadChildren: './animals/animals.module#AnimalsModule',
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
