import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarModule } from '@shared/navbar';
import { ListAssetModule } from '@pages/list-asset';
import { AddAssetModule } from '@pages/add-asset';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    ListAssetModule,
    AddAssetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
