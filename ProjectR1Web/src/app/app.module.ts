import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './routes';
import { NavBarModule } from '@shared/navbar';
import { ListAssetModule } from '@pages/list-asset';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    RouterModule.forRoot(ROUTES),
    ListAssetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
