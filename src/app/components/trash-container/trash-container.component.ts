import { Component, OnInit } from '@angular/core';
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

  notesList: { title: string, description: string }[] = [];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList = res.data.filter((note:{trash:boolean}) => note.trash);
        console.log(this.notesList)
      },
      err => {
        console.log(err)
      }
    );
  }
}
