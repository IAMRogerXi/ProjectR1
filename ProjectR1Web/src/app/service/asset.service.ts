import { Injectable } from '@angular/core';
import { Asset } from '@model/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  assets: Asset[] = [
    { id: '1', tag: '1', name: '1', location: '1', assetOwner: '1', created: '', createdBy: 'ROXI', modified: '', modifiedBy: '' },
    { id: '2', tag: '2', name: '2', location: '2', assetOwner: '2', created: '', createdBy: 'ROXI', modified: '', modifiedBy: '' }
  ];

  constructor() { }

  public getAssets(): Asset[] {
    return this.assets;
  }

  public getAsset(id: string): Asset {
    return null;
  }

  public addAsset(asset: Asset){

  }

}
