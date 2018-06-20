import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { ThemePickerModule } from '@shared/theme-picker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,    
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ThemePickerModule
  ],
  exports: [NavBar],
  declarations: [
    NavBar
  ]
})
export class NavBarModule { }
