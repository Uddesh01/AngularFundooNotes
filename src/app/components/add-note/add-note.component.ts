import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from 'src/app/services/note.service';
import {
  IMG_ICON,
  TICK_ICON,
  BRUSH_ICON,
  REMINDER_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  ARCHIVE_ICON,
  MORE_ICON,
  EDIT_ICON,
  UNDO_ICON,
  RESTORE_ICON
} from 'src/assets/svg-icons';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  @Output() updateList=new EventEmitter<{title:"",description:""}>();;
  hiddeCreateNote:boolean=true;
  title:string="";
  description:string="";

  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService:NoteService) {
    iconRegistry.addSvgIconLiteral("Tick-icon", sanitizer.bypassSecurityTrustHtml(TICK_ICON))
    iconRegistry.addSvgIconLiteral("Brush-icon", sanitizer.bypassSecurityTrustHtml(BRUSH_ICON))
    iconRegistry.addSvgIconLiteral('Img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('coll-icon',sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral('Color-Palatte-icon',sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon',sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('more-icon',sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('undo-icon',sanitizer.bypassSecurityTrustHtml(UNDO_ICON))
    iconRegistry.addSvgIconLiteral('redo-icon',sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
  }
  ngOnInit(): void {
  }

  handleCreateNote(action:string){
    this.hiddeCreateNote = !this.hiddeCreateNote
    if(action=="close"){
      const noteObj={
        "title": this.title,
        "description": this.description,
        "color": "",
        "image": "",
        "archive": false,
        "pin": false,
        "trash": false
      }
      this.noteService.addNote(noteObj).subscribe(res=> {
        this.updateList.emit(res.data)
      },err=>console.log(err))
    }
  }
}
