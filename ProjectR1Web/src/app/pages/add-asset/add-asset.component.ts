import { NgModule, Component, OnInit } from '@angular/core';
import { Asset } from '@model/asset';
import { AssetService } from '@service/asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {

  constructor(private assetService: AssetService) { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
  ],
  exports: [
    AddAssetComponent
  ],
  declarations: [
    AddAssetComponent
  ]
})
export class AddAssetModule { }