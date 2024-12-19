import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HimBibleComponent } from './components/him-bible/him-bible.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'newyear-bible',
    pathMatch: 'full'
  },
  {
    path: 'newyear-bible', component: HimBibleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
