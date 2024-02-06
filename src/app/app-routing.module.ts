import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DemoComponent } from './components/demo/demo.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';

const routes: Routes = [
  {path:"", component:DemoComponent },
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard",component:DashBoardComponent,
   children:[
    {path:"notes",component:NotesContainerComponent},
    {path:"archive",component:ArchiveContainerComponent},
    {path:"trash",component:TrashContainerComponent}
   ]},
  {path:"displaynote",component:DisplaynoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
