import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialProfComponent } from './tela-inicial-prof/tela-inicial-prof.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: TelaLoginComponent},
  {path: 'tela-inicial-prof', component: TelaInicialProfComponent,}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
