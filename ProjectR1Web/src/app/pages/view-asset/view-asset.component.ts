import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  exports: [
    ViewAssetComponent
  ],
  declarations: [
    ViewAssetComponent
  ]
})
export class ViewAssetModule {

}
