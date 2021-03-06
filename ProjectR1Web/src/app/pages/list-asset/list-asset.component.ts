import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AddAssetModule } from '@pages/add-asset';
import { Asset } from '@model/asset';
import { AssetService } from '@service/asset.service';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.scss']
})
export class ListAssetComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['tag', 'name', 'location', 'assetOwner', 'createdBy'];
  dataSource = null;

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Asset>(this.assetService.getAssets());
    this.dataSource.paginator = this.paginator;
  }

}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    AddAssetModule
  ],
  exports: [
    ListAssetComponent
  ],
  declarations: [
    ListAssetComponent
  ]
})
export class ListAssetModule { }
