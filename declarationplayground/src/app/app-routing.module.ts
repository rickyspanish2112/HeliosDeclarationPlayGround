import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclarationComponent } from './declaration/declaration.component';

const routes: Routes = [
  {
    path: '', component: DeclarationComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
