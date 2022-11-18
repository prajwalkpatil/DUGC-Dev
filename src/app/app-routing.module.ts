import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UploadSheetsComponent } from './upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'dugc_chairman', component: DugcChairmanComponent },
  { path: 'upload_sheets', component: UploadSheetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
