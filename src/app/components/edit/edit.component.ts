import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';

interface noteData {
  title: string,
  description: string,
  noteID: number,
  color: string,
  archive: boolean,
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  title!: string
  description!: string
  color!: string  
  noteID!: number
  archive!: boolean
  showColorPicker: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { noteData: noteData }, public dialogRef: MatDialogRef<EditComponent>, public noteService: NoteService) {
    console.log(data)
    this.title = data.noteData.title
    this.description = data.noteData.description
    this.color = data.noteData.color
    this.noteID = data.noteData.noteID
    this.archive = data.noteData.archive
  }

  ngOnInit(): void {
  }

  handleEditNote() {
    this.noteService.editNote(this.noteID, {
      titel: this.title,
      discription: this.description
    }).subscribe(
      res => {
        this.dialogRef.close({
          operation: "edit",
          noteID: this.noteID,
          title: this.title,
          description: this.description,
          color: this.color,
          archive: this.archive
        });
      },
      err => {
        console.error(err);
      }
    )
  };

  selectColor(color: string) {
    this.color = color
    this.showColorPicker = false
  }

  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  handleArchive(){
    this.archive=!this.archive
  }
}