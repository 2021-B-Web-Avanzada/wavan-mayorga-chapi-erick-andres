import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMicrosfotComponent } from './rutas/home-microsfot/home-microsfot.component';
import {BannerModule} from "./componentes/banner/banner.module";
import {MenuFooterModule} from "./componentes/menu-footer/menu-footer.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeMicrosfotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    MenuFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
