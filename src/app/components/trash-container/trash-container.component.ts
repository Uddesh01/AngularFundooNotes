import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss'],
  host: {
    class: "app-trash-container-cnt"
  }
})
export class TrashContainerComponent implements OnInit {
  iconAction: string = '';
  notesList: { title: string; description: string; noteID: number , color:string, archive: boolean}[] = [];
  hiddenDeleteButton:boolean=true;
  searchString!:string
  subscription!:Subscription
  constructor(private noteService: NoteService,private data:DataServiceService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList=res.data.filter((note:{trash:boolean})=>note.trash);
      },
      err =>{
        console.log(err);
     });
     this.iconAction = "trash";
     this.subscription = this.data.currSearchQuery.subscribe(state => this.searchString = state)
  }

  updateNotesList($event:{action:string,data:{title:string,description:string,noteID:number,color:string, archive: boolean}}){
    if($event.action === "trash"){
      
      this.notesList = this.notesList.filter(ele => ele.noteID != $event.data.noteID)
    }
  }
}
