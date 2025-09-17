import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ImcComponent } from './imc/imc.component';
import { ConvTempComponent } from './conv-temp/conv-temp.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'media', component: CalcMediaComponent},
  {path: 'apolice', component: ApoliceComponent},
  {path: 'imc', component: ImcComponent},
  {path: 'conversorTemp', component: ConvTempComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
