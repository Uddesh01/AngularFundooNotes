
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {
  notesList: { title: string; description: string; noteID: number; color:string }[] = [];
  @Output() updateList = new EventEmitter<{ action: string, data: { title: string, description: string, noteID: number } }>();
  iconAction: string = '';
  constructor(private noteService: NoteService) {
   }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList = res.data.filter((note: { archive: boolean }) => note.archive);
      },
      err => {
        console.error(err);
      }
    );
    this.iconAction = "archive";
  } 

  updateNotesList($event: { action: string, data: { title: string, description: string, noteID: number } }): void {
    if ($event.action === "archive") {
      this.notesList = this.notesList.filter(note => note.noteID !== $event.data.noteID);
    }
  }
}
