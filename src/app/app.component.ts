import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ScannerComponent} from './scanner/scanner.component';
import {DialogData} from './interfaces/DialogData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaterialDesignDemo';
  color = 'accent';
  checked = false;
  disabled = false;

  packageNumber: string = null;
  supplier: string = null;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ScannerComponent, {
      width: '100vw',
      height: '100hw',
      panelClass: 'full-screen-scanner',
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.packageNumber = result.packageNumber;
      this.supplier = result.supplier;
    });
  }
}
