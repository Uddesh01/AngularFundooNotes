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
  
}
