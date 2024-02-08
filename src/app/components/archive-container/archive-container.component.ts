import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss'],
  host: {
    class: "app-archive-container-cnt"
  }
})
export class ArchiveContainerComponent implements OnInit {
  notesList: { title: string, description: string }[] = [];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList = res.data.filter((note:{archive:boolean}) => note.archive);
        console.log(this.notesList)
      },
      err => {
        console.log(err)
      }
    );
  }
}
