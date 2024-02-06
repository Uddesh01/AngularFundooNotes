import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NOTE_ICON,
  REMINDER_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  IMG_ICON,
  ARCHIVE_ICON,
  MORE_ICON,
  DELETE_FOREVER_ICON,
  RESTORE_ICON,
  UNARCHIVE_ICON,
  EDIT_ICON,
  TRASH_ICON,
  PIN_ICON,
  TICK_ICON
} from 'src/assets/svg-icons';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-note',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  title: string = '';
  description: string = '';

  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,router: Router) {
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('coll-icon',sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral('Color-Palatte-icon',sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon',sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('more-icon',sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('pin-icon',sanitizer.bypassSecurityTrustHtml(PIN_ICON))
    iconRegistry.addSvgIconLiteral('tick-icon',sanitizer.bypassSecurityTrustHtml(TICK_ICON))
  }

  ngOnInit(): void {
  }
}
