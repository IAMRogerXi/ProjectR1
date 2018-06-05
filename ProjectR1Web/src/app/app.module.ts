import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AssetModule } from '@component/asset/asset.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AssetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
