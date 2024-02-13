import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
  host: {
    class: "app-notes-container-cnt"
  }
})
export class NotesContainerComponent implements OnInit {
  notesList: { title: string, description: string, noteID: number, color: string }[] = []
  iconAction: string = '';
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
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

  updateNotesList($event: { action: string, data: { title: string, description: string, noteID: number, color: string } }) {
    if ($event.action === "addNote") {
      this.notesList = [$event.data, ...this.notesList]
    }
    else if ($event.action === "archive") {
      this.notesList = this.notesList.filter(ele => ele.noteID != $event.data.noteID)
    }
    else if ($event.action === "trash") {
      this.notesList = this.notesList.filter(ele => ele.noteID != $event.data.noteID)
    }
    else if ($event.action === "color" || $event.action === "edit") {
      this.notesList = this.notesList.map(note => {
        if (note.noteID === $event.data.noteID) {
          if ($event.action === "color") {
            note.color = $event.data.color;
          } 
          else if ($event.action === "edit") {
            note.title = $event.data.title;
            note.description = $event.data.description;
          }
        }
        return note;
      });
    }
  }
}
