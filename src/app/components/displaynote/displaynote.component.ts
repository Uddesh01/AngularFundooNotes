import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  REMINDER_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  IMG_ICON,
  ARCHIVE_ICON,
  MORE_ICON,
  EDIT_ICON,
  UNARCHIVE_ICON,
  RESTORE_ICON,
  DELETE_FOREVER_ICON
} from 'src/assets/svg-icons';
import { NoteService } from 'src/app/services/note.service';
import { not } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-display-note',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Output() updateList = new EventEmitter<{ action: string, data: { title: string, description: string, noteID: number, color: string } }>();
  @Input() note!: { title: string, description: string, noteID: number, color: string };
  @Input() iconAction!: string;
  showColorPicker: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, router: Router, private noteService: NoteService) {
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('coll-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral('Color-Palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('delete-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
  }

  ngOnInit(): void {
  }

  handleIconsClick(action: string, noteID: number) {
    if (action === "archive" || action === "unarchive") {
      this.noteService.archive(noteID).subscribe(res => {
        this.updateList.emit({ action: "archive", data: { title: this.note.title, description: this.note.description, noteID: this.note.noteID, color: this.note.color } })
      }, err => console.log(err))
    }
    else if (action === "trash") {
      this.noteService.trash(noteID).subscribe(res => {
        this.updateList.emit({ action: "trash", data: { 
          title: this.note.title, 
          description: this.note.description, 
          noteID: this.note.noteID, 
          color: this.note.color} })
      }, err => console.log(err))
    }

    else if (action === "delete") {
      this.noteService.delete(noteID).subscribe(res => {
        this.updateList.emit({
          action: "trash",
          data: {
            title: this.note.title,
            description: this.note.description,
            noteID: this.note.noteID,
            color: this.note.color
          }
        })
      }, err => console.log(err))
    }
  }

  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  selectColor(color: string, noteID: number) {
    this.showColorPicker = false;
    console.log('Note color before update:', this.note.color)
    console.log(color);
    this.noteService.colorCall(noteID, color).subscribe
      (res => {
        this.updateList.emit({
          action: "color",
          data: {
            title: this.note.title,
            description: this.note.description,
            noteID: this.note.noteID,
            color: color
          }
        });
      },
        err =>
          console.error(err))
  }
}
