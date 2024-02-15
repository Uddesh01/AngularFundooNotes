import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private drawerState = new BehaviorSubject(false);
  private searchQuery = new BehaviorSubject('');
  currDrawerState = this.drawerState.asObservable();
  currSearchQuery = this.searchQuery.asObservable();

  constructor() { }

  toggleDrawerState(state: boolean) {
    this.drawerState.next(state)
  }

  updateSearchQuery(searchQuery: string){
   this.searchQuery.next(searchQuery)
  }
}
