import { Component, Inject,  ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBarRef} from '@angular/material';
import {DialogData} from './../interfaces/DialogData';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit{

    @ViewChild(BarecodeScannerLivestreamComponent)
    barecodeScanner: BarecodeScannerLivestreamComponent;
    
    barcodeValue;
    barcodes;
    packageNumber;
    supplier;

  constructor(
    public dialogRef: MatDialogRef<ScannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar) {
    
      this.barcodes = {packageNumber: null, supplier:null}; 
      this.packageNumber = /^P([\d]{5})$/i;
      this.supplier = /^s([\d]{4})$/i;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  openSnackBar() : MatSnackBarRef<PizzaPartyComponent>{
    return this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 5 * 1000,
    });
  }

  onValueChanges(result){
    
    this.barcodeValue = result.codeResult.code;

    if(this.barcodes.packageNumber === null) {
      var packageNumber = result.codeResult.code.match(this.packageNumber);
    }

    if(this.barcodes.supplier === null) {
      var supplier = result.codeResult.code.match(this.supplier);
    }
  
    if(packageNumber  && packageNumber.length > 0) {
      this.barcodes.packageNumber = packageNumber[1];
      console.log("package Found");
      //var packageNumberBar = this.openSnackBar();
    } else if(supplier && supplier.length > 0) {
      this.barcodes.supplier = supplier[1];
      console.log("Supplier Found");
      //var supplierBar = this.openSnackBar();
    }
    
    if(this.barcodes.packageNumber !== null && this.barcodes.supplier !== null) {
      if(supplierBar) {
        supplierBar.dismiss();
      }
      
      if(packageNumberBar) {
        packageNumberBar.dismiss();
      }

      this.dialogRef.close(this.barcodes);
    }
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}