import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MENU_ICON,
  SEARCH_ICON,
  REFRESH_ICON,
  SETTING_ICON,
  LIST_VIEW_ICON,
  OTHER_MENU_ICON
} from 'src/assets/svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundoo-header',
  templateUrl: './fundoo-header.component.html',
  styleUrls: ['./fundoo-header.component.scss'],
  host: {
    class: "app-fundoo-header-cnt"
  }
})
export class FundooHeaderComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral("Menu-icon", sanitizer.bypassSecurityTrustHtml(MENU_ICON))
    iconRegistry.addSvgIconLiteral("Search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("Refresh-icon", sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("Setting-icon", sanitizer.bypassSecurityTrustHtml(SETTING_ICON))
    iconRegistry.addSvgIconLiteral("List-view-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    iconRegistry.addSvgIconLiteral("Other-menu-icon", sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON))
  }


  ngOnInit(): void {
  }

}
