import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import {
  NOTE_ICON,
  REMINDER_ICON,
  EDIT_ICON,
  ARCHIVE_ICON,
  TRASH_ICON
} from 'src/assets/svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  host: {
    class: "app-side-nav-cnt"
  }
})
export class SideNavComponent implements OnInit {

  drawerState!: boolean;
  subscription!: Subscription;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private data: DataServiceService, public router: Router) {
    iconRegistry.addSvgIconLiteral("Note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("Reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("Edit-labels-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral("Archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("Trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
  }

  ngOnInit(): void {
    this.subscription = this.data.currDrawerState.subscribe(state => this.drawerState = state)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  archiveNavigate() {
    this.router.navigate(["/dashboard/archive"])
  }
  notesNavigate() {
    this.router.navigate(["/dashboard/notes"])
  }
  reminderNavigate() {
    this.router.navigate(["/dashboard/reminder"])
  }
  editNavigate() {
    this.router.navigate(["/dashboard/edit"])
  }
  trashNavigate() {
    this.router.navigate(["/dashboard/trash"])
  }

}
