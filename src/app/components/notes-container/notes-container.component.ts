import { Component, OnInit } from '@angular/core';
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
notesList:{title:"",description:""}[]=[]

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(res => this.notesList=res.data,err=> console.log(err))
  }
 


}
