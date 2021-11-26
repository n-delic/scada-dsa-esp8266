import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlsComponent } from './components/controls/controls.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path:'garaza',
    component: ControlsComponent
  },
  {
    path:'krov',
    component: ControlsComponent
  },
  {
    path:'bazen',
    component: ControlsComponent
  },
  {
    path:'soba',
    component: ControlsComponent
  },
  {
    path:'',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
