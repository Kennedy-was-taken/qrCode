import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrformComponent } from './qrform/qrform.component';

const routes: Routes = [
  {path: '', component: QrformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
