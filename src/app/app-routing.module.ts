import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroComponent } from './livro/livro.component';


const routes: Routes = [

  {path: 'livro', component: LivroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
