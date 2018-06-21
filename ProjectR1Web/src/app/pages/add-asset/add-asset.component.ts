import { NgModule, Component, OnInit, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Asset } from '@model/asset';
import { AssetService } from '@service/asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {

  asset: Asset = new Asset();

  constructor(
    private assetService: AssetService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddAssetDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.asset.name = result;
      this.assetService.addAsset(this.asset);
      this.asset = new Asset();
    });
  }

}

@Component({
  selector: 'add-asset-dialog',
  templateUrl: 'add-asset-dialog.html',
})
export class AddAssetDialog {

  constructor(
    public dialogRef: MatDialogRef<AddAssetDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    AddAssetDialog
  ],
  exports: [
    AddAssetComponent,
    AddAssetDialog
  ],
  declarations: [
    AddAssetComponent,
    AddAssetDialog
  ]
})
export class AddAssetModule { }