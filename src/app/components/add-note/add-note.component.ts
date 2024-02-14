import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from 'src/app/services/note.service';
import { FormsModule } from '@angular/forms';
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


  @Output() updateList = new EventEmitter<{action:string,data:{title:"",description:"",noteID:number,color:string , archive:boolean}}>();
  hiddenCreateNote:boolean=true;
  title:string="";
  description:string="";
  archive:boolean= false;
  color:string="";
  showColorPicker: boolean = false;


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
    this.hiddenCreateNote = !this.hiddenCreateNote
    if(action=="close" && (this.title != "" || this.description != "")){
      const noteObj={
        "title": this.title,
        "description": this.description,
        "color": this.color,
        "image": "",
        "archive": this.archive,
        "pin": false,
        "trash": false
      }
      this.noteService.addNote(noteObj).subscribe( res=> {
        this.updateList.emit({action:"addNote",data:{title:res.data.title,description:res.data.description,noteID:res.data.noteID, color:res.data.color, archive: res.data.archive}})
        this.title=''
        this.description=''
        this.archive=false
        this.color="#ffffff"  
      },err=>console.log(err))
    }
  }

  handleArchive(){
    this.archive=!this.archive
    console.log(this.archive);
  }

  selectColor(color: string) {
    this.color = color
    this.showColorPicker=false
    }

    toggleColorPicker() {
      this.showColorPicker = !this.showColorPicker;
    }
}