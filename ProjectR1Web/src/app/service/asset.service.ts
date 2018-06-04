import { Injectable } from '@angular/core';
import { Asset } from '../model/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  public getAssets(): Asset[] {
    return null;
  }
  
}
