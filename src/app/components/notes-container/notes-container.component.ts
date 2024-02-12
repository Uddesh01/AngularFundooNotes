import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
  host:{
    class:"app-notes-container-cnt"
  }
})
export class NotesContainerComponent implements OnInit {
notesList:{title:string,description:string,noteID:number}[]=[]
iconAction: string = '';
  constructor(private noteService:NoteService) { }

  ngOnInit(): void{
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList = res.data.filter((note: { archive: boolean, trash: boolean }) => !note.archive && !note.trash);
      },
      err => {
        console.error(err);
      }
    );
    this.iconAction = "note";
  }
  
  updateNotesList($event:{action:string,data:{title:string,description:string,noteID:number}}){
    if($event.action === "addNote"){
     // this.iconAction="note"
      this.notesList = [$event.data,...this.notesList]
    }
    else if($event.action === "archive"){
      //this.iconAction="note"
      this.notesList = this.notesList.filter(ele => ele.noteID != $event.data.noteID)
    }
    else if($event.action === "trash"){
      //this.iconAction="trash"
      this.notesList = this.notesList.filter(ele => ele.noteID != $event.data.noteID)
    }
  }
}