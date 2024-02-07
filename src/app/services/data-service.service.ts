import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private drawerState = new BehaviorSubject(false);
  currDrawerState = this.drawerState.asObservable();

  constructor() { }

  toggleDrawerState(state: boolean) {
    this.drawerState.next(state)
  }
}
