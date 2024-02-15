
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {
  notesList: { title: string; description: string; noteID: number; color:string, archive:boolean }[] = [];
  @Output() updateList = new EventEmitter<{ action: string, data: { title: string, description: string, noteID: number, color:string, archive: boolean } }>();
  iconAction: string = '';
  searchString!:string
  subscription!:Subscription
  constructor(private noteService: NoteService, private data: DataServiceService) {}

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList = res.data.filter((note: { archive: boolean }) => note.archive);
      },
      err => {
        console.error(err);
      }
    );
    this.iconAction = "unarchive";
    this.subscription = this.data.currSearchQuery.subscribe(state => this.searchString = state)
  } 

  updateNotesList($event: { action: string, data: { title: string, description: string, noteID: number , color:string , archive: boolean} }): void {
    if ($event.action === "archive") {
      this.notesList = this.notesList.filter(note => note.noteID !== $event.data.noteID);
    }
    else if ($event.action === "color") {
      const updatedNote = this.notesList.find(note => note.noteID === $event.data.noteID);
      if (updatedNote) {
        updatedNote.color = $event.data.color;
      }
    }
    else if ($event.action === "edit") {
      const updatedNote = this.notesList.find(note => note.noteID === $event.data.noteID);
      if (updatedNote) {
        updatedNote.title = $event.data.title;
        updatedNote.description=$event.data.description
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
