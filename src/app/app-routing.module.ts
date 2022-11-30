import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UploadSheetsComponent } from './upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';
import { DugcComponent } from './dugc/dugc.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleSheetUploadComponent } from './single-sheet-upload/single-sheet-upload.component';
import { ConsolidatedSheetUploadComponent } from './consolidated-sheet-upload/consolidated-sheet-upload.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { DeleteSheetComponent } from './delete-sheet/delete-sheet.component';

const routes: Routes = [
  {
    path: 'dugc_chairman',
    component: DugcChairmanComponent,
  },
  { path: 'dugc', component: DugcComponent },
  {
    path: 'coordinator',
    component: CoordinatorComponent,
    children: [
      {
        path: 'single',
        component: SingleSheetUploadComponent,
      },
      {
        path: 'consolidated',
        component: ConsolidatedSheetUploadComponent,
      },
      {
        path: 'delete',
        component: DeleteSheetComponent,
      },
      {
        path: 'upload_status',
        component: UploadResultComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
