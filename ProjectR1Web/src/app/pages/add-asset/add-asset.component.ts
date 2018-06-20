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
    let asset = { id: '3', tag: '3', name: '3', location: '3', assetOwner: '3', created: '', createdBy: 'ROXI', modified: '', modifiedBy: '' };

    this.assetService.addAsset(asset);
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