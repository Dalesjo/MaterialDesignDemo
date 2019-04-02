import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app.module.material';
import { ScannerComponent } from './scanner/scanner.component';
import { PizzaPartyComponent } from './scanner/scanner.component';

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';


@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    BarecodeScannerLivestreamModule,
    FormsModule
  ],
  entryComponents: [ScannerComponent,PizzaPartyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
