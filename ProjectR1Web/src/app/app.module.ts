import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssetModule } from '@module/asset/asset.module';
import { AppComponent } from './app.component';
import { NavBar } from '@pages/navbar';

@NgModule({
  declarations: [
    AppComponent,
    NavBar
  ],
  imports: [
    BrowserModule,
    AssetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
