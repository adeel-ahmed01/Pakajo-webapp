import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenevoleComponent } from './benevole/benevole.component';
import { CasierComponent } from './casier/casier.component';
import { CasiersComponent } from './casiers/casiers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'benevole', component: BenevoleComponent},
  {path: 'casiers', component: CasiersComponent},
  {path: 'truc', component: CasierComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
