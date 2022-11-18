import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UploadSheetsComponent } from './upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';
import { DugcComponent } from './dugc/dugc.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'dugc_chairman',
    component: DugcChairmanComponent,
  },
  { path: 'dugc', component: DugcComponent },
  {
    path: 'coordinator',
    component: CoordinatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
