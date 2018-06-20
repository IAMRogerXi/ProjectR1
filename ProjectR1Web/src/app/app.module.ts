import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarModule } from '@shared/navbar';
import { AssetListModule } from '@pages/list-asset';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    AssetListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
