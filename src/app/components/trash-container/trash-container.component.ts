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
  iconAction: string = '';
  notesList: { title: string; description: string; noteID: number , color:string, archive: boolean}[] = [];
  hiddenDeleteButton:boolean=true;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.notesList=res.data.filter((note:{trash:boolean})=>note.trash);
      },
      err =>{
        console.log(err);
     });
     this.iconAction = "trash";
  }

  updateNotesList($event:{action:string,data:{title:string,description:string,noteID:number,color:string, archive: boolean}}){
    if($event.action === "trash"){
      
      this.notesList = this.notesList.filter(ele => ele.noteID != $event.data.noteID)
    }
  }
}
