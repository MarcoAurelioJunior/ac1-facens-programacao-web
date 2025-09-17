import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { FormsModule } from '@angular/forms';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ImcComponent } from './imc/imc.component';
import { Router, RouterOutlet } from '@angular/router';
import { ConvTempComponent } from './conv-temp/conv-temp.component';

// Remova as referências dos componentes deletados
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MenuSuperiorComponent,
    CalcMediaComponent,
    ApoliceComponent,
    ImcComponent,
    ConvTempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
