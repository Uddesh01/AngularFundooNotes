import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DemoComponent } from './components/demo/demo.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';

const routes: Routes = [
  {path:"", component:DemoComponent },
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard",component:DashBoardComponent},
  {path:"displaynote",component:DisplaynoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
