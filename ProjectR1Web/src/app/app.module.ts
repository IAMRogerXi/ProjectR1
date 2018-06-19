import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarModule } from '@shared/navbar';
import { AssetListModule } from '@pages/list-asset';
import { AppComponent } from './app.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAssetComponent,
    ViewAssetComponent
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
