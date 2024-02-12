import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService:HttpService) { }

  getAllNotes(){
   return this.httpService.getAllNotes("Note/GetAllNotes")
  }

  addNote(data:object){
    return this.httpService.addNote("Note/AddNote",data)
  }

  archive(noteID:number){
    return this.httpService.archive(`Note/Archive-UnArchive?noteId=${noteID}`)
  }
  trash(noteID:number){
    return this.httpService.trash(`Note/Trash-UnTrash?noteId=${noteID}`)
  }
  delete(noteID:number){
    return this.httpService.delete(`Note/DeleteNote?noteId=${noteID}`)
  }
}
