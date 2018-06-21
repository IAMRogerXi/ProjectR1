import { Component, OnInit, Inject } from '@angular/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material';
import { Asset } from '@model/asset';

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