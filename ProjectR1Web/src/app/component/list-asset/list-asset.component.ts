import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Asset } from '@model/asset';
import { AssetService } from '@service/asset.service';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.css']
})
export class ListAssetComponent implements OnInit {

  displayedColumns = ['tag', 'name', 'location', 'assetOwner'];
  dataSource = new MatTableDataSource<Asset>(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: Asset[] = [
  { id: '1', tag: '1', name: '1', location: '1', assetOwner: '1', created: '', createdBy: '', modified: '', modifiedBy:'' },
  { id: '2', tag: '2', name: '2', location: '2', assetOwner: '2', created: '', createdBy: '', modified: '', modifiedBy:'' }
];
