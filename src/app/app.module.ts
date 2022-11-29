import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UploadSheetsComponent } from './upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';
import { DugcComponent } from './dugc/dugc.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { SingleSheetUploadComponent } from './single-sheet-upload/single-sheet-upload.component';
import { ConsolidatedSheetUploadComponent } from './consolidated-sheet-upload/consolidated-sheet-upload.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadResultComponent } from './upload-result/upload-result.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainMenuComponent,
    UploadSheetsComponent,
    DugcChairmanComponent,
    DugcComponent,
    CoordinatorComponent,
    SingleSheetUploadComponent,
    ConsolidatedSheetUploadComponent,
    UploadResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
