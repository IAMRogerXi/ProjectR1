import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssetModule } from '@module/asset/asset.module';
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
