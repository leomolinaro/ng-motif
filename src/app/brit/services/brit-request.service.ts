import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { BritRequest } from './../models/brit-request.model';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

import * as fromReq from './../models/brit-request.model';
import { BritUIService } from './brit-ui.service';

@Injectable()
export class BritRequestService {
  
  private requestSnackBarRef: MatSnackBarRef<SimpleSnackBar>;

  private selectableAreas = new BehaviorSubject<{ [id: string]: boolean }>({});
  private selectableUnits = new BehaviorSubject<{ [id: string]: boolean }>({});
  private response = new Subject<{ key: string, payload?: any }>();

  selectableAreas$ = this.selectableAreas.asObservable();
  selectableUnits$ = this.selectableUnits.asObservable();
  response$ = this.response.asObservable();

  private requestSubscriptions: Subscription[] = [];

  constructor (
    private snackBar: MatSnackBar,
    private uiService: BritUIService
  ) { }

  manageRequest (request: BritRequest) {
    if (request.passOption) {
      this.showRequestSnackBar (request.instruction, "Pass");
      let sub = this.uiService.passClick$.subscribe (() => {
        if (request.passOption) { this.respond (request.passOption); }
      });
      this.requestSubscriptions.push (sub);
    } else if (request.continueOption) {
      this.showRequestSnackBar (request.instruction, "Continue");
      let sub = this.uiService.continueClick$.subscribe (() => {
        if (request.continueOption) { this.respond (request.continueOption); }
      });
      this.requestSubscriptions.push (sub);
    } else {
      this.showRequestSnackBar (request.instruction);
    } // if - else
    switch (request.type) {
      case fromReq.SELECT_AREA: {
        let selectableAreas = {};
        request.modelOptions.forEach (area => { selectableAreas[area.id] = true; });
        this.selectableAreas.next (selectableAreas);
        let sub = this.uiService.areaClick$.subscribe (event => {
          let areaId = event.areaId;
          let index = request.modelOptions.findIndex (area => area.id == areaId);
          if (index >= 0) { this.respond (index + "", { svgX: event.svgX, svgY: event.svgY }); }
        }); // subscribe
        this.requestSubscriptions.push (sub);
      } break; // SELECT_AREA
      case fromReq.SELECT_UNIT: {
        let selectableUnits = {};
        request.modelOptions.forEach (unit => { selectableUnits[unit.id] = true; });
        this.selectableUnits.next (selectableUnits);
        let sub = this.uiService.unitClick$.subscribe (event => {
          let unitId = event.unitId;
          let index = request.modelOptions.findIndex (unit => unit.id == unitId);
          if (index >= 0) { this.respond (index + ""); }
        }); // subscribe
        this.requestSubscriptions.push (sub);
      } break; // SELECT_UNIT
      case fromReq.CONTINUE: {
      } break; // CONTINUE
      default: console.error ("Brit request unknown");
    } // switch - case
  } // manageRequest

  private showRequestSnackBar(requestTitle: string, action?: string) {
    this.requestSnackBarRef = this.snackBar.open(requestTitle, action);
    if (action) {
      switch (action) {
        case "Pass": this.requestSnackBarRef.onAction().subscribe(() => { this.uiService.onPassClick(); }); break;
        case "Continue": this.requestSnackBarRef.onAction().subscribe(() => { this.uiService.onContinueClick(); }); break;
        default: console.error("Action unknown");
      }
    }
  }

  respond(key: string, payload?: any): any {
    while (this.requestSubscriptions.length > 0) {
      this.requestSubscriptions.pop().unsubscribe ();
    }
    this.requestSnackBarRef.dismiss();
    this.selectableAreas.next({});
    this.selectableUnits.next({});
    this.response.next({ key: key, payload: payload });
  }

}
