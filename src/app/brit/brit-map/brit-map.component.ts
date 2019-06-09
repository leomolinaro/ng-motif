import { Subject, Observable, merge } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';
import { BritUIService } from '../services/brit-ui.service';
import { filter, tap, map, mapTo, scan } from 'rxjs/operators';

@Component({
  selector: 'brit-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-map.component.html',
  styleUrls: ['./brit-map.component.css']
})
export class BritMapComponent implements OnInit {

  private mysvg: any;
  private mymap: any;

  private keyPress: Subject<KeyboardEvent> = new Subject<KeyboardEvent> ();
  private mouseWheel: Subject<WheelEvent> = new Subject<WheelEvent> ();
  private mouseDown: Subject<MouseEvent> = new Subject<MouseEvent> ();
  private mouseUp: Subject<MouseEvent> = new Subject<MouseEvent> ();
  private mouseMove: Subject<MouseEvent> = new Subject<MouseEvent> ();
  private reset: Subject<boolean> = new Subject<boolean> ();
  currentMapTransform$: Observable<string>;

  private grabbing: boolean = false;
  private grabbingX: number = null;
  private grabbingY: number = null;

  areaIds$: Observable<string[]>;
  nationIds$: Observable<string[]>;

  constructor(
    private store: Store<any>,
    private uiService: BritUIService
  ) { }

  endGrabbing(): void {
    this.grabbing = false;
    this.grabbingX = null;
    this.grabbingY = null;
  }
  
  ngOnInit() {
    this.areaIds$ = this.store.select(fromBrit.selectAreaIds);
    this.nationIds$ = this.store.select(fromBrit.selectNationIds);

    this.mysvg = document.getElementById('mysvg');
    this.mymap = document.getElementById('mymap');

    this.mouseDown.subscribe (
      event => {
        if (event.button == 0) {
          this.grabbing = true;
          this.grabbingX = event.clientX;
          this.grabbingY = event.clientY;
        } else if (event.button == 1) {
          event.preventDefault ();
          this.onMapReset ();
        }
      }
    );

    this.mouseUp.subscribe(event => {
      if (event.button == 0) {
        this.endGrabbing();
      }
    });
    
    this.currentMapTransform$ = merge(
      this.mouseWheel.pipe(
        filter(e  => e.ctrlKey),
        tap(e => e.preventDefault ()),
        map(e => {
          var zoom = (e.deltaY > 0) ? 0.9 : 1.1;
          var svg: any = document.getElementById('mysvg'); 
          var pt = svg.createSVGPoint();
          pt.x = e.clientX;
          pt.y = e.clientY;
          var zoomOrigin = pt.matrixTransform(svg.getScreenCTM().inverse());
          return { zoom: zoom, x0: zoomOrigin.x, y0: zoomOrigin.y, xt: 0, yt: 0, reset: false };
        })
      ),
      this.mouseWheel.pipe(
        filter(e  => e.shiftKey),
        tap(e => e.preventDefault()),
        map(event => {
          let step = 15;
          if (event.deltaY > 0) {
            return { zoom: 1, x0: 0, y0: 0, xt: -1*step, yt: 0, reset: false };
          } else {
            return { zoom: 1, x0: 0, y0: 0, xt: step, yt: 0, reset: false };
          }
        })
      ),
      this.reset.pipe(
        mapTo({ zoom: null, x0: null, y0: null, xt: null, yt: null, reset: true })
      ),
      this.keyPress.pipe(
        map(event => {
          let step = 15;
          switch (event.key) {
            case "d": return { zoom: 1, x0: 0, y0: 0, xt: -1*step, yt: 0, reset: false };
            case "w": return { zoom: 1, x0: 0, y0: 0, xt: 0, yt: step, reset: false };
            case "a": return { zoom: 1, x0: 0, y0: 0, xt: step, yt: 0, reset: false };
            case "s": return { zoom: 1, x0: 0, y0: 0, xt: 0, yt: -1*step, reset: false };
            default: return null;
          }
        }),
        filter(translParams => !!translParams)
      ),
      this.mouseMove.pipe(
        filter(() => this.grabbing),
        map(event => {
          let speed = 1;
          let xt = speed*(event.clientX - this.grabbingX);
          let yt = speed*(event.clientY - this.grabbingY);
          this.grabbingX = event.clientX;
          this.grabbingY = event.clientY;
          return { zoom: 1, x0: 0, y0: 0, xt: xt, yt: yt, reset: false }
        })
      )
    ).pipe(
      scan(
        (prev: { s: number, xt: number, yt: number}, zoomParams: { zoom: number, x0: number, y0: number, xt: number, yt: number, reset: boolean }) => {
          if (zoomParams.reset) { return { s: 1, xt: 0, yt: 0} }
          var newScale = zoomParams.zoom;
          var newXt = zoomParams.x0 * (1 - newScale) + zoomParams.xt;
          var newYt = zoomParams.y0 * (1 - newScale) + zoomParams.yt;
          return { s: newScale*prev.s, xt: newXt + newScale*prev.xt, yt: newYt + newScale*prev.yt }
        }, 
        { s: 1, xt: 0, yt: 0 }
      ),
      map(matrixParams =>
        "matrix (" + matrixParams.s + ", 0, 0, " + matrixParams.s + ", " + matrixParams.xt + ", " + matrixParams.yt + ")"
      )
    );
  }

  public onMapReset () { this.reset.next (true); };
  onMouseWheel (event: WheelEvent) { this.mouseWheel.next(event); }
  onMouseDown (event: MouseEvent) { this.mouseDown.next(event); }
  onMouseUp (event: MouseEvent) { this.mouseUp.next(event); }
  onMouseMove (event: MouseEvent) { this.mouseMove.next(event); }
  onKeyPress (event: KeyboardEvent) { this.keyPress.next(event); }
  onMouseLeave(event: MouseEvent) { this.endGrabbing(); }
  onFocus (event: FocusEvent) { }

  // private onUnitClick (unit: Unt) { /*console.log ("click");*/ this.gameBoardService.onUnitClick (unit); }
  // private onUnitDblClick (unit: Unt, event: MouseEvent) { /*console.log ("dblClick", event);*/ this.gameBoardService.onUnitDblClick (unit); }
  // private onPopMrkClick (nat: Nat) { this.gameBoardService.onPopMrkClick (nat); }
  // private onPopMrkDblClick (nat: Nat) { this.gameBoardService.onPopMrkDblClick (nat); }

  onAreaClick (areaId: string, event: MouseEvent) {
    let pt = this.mysvg.createSVGPoint ();
    pt.x = event.clientX;
    pt.y = event.clientY;
    let svgP = pt.matrixTransform (this.mymap.getScreenCTM ().inverse ());
    this.uiService.onAreaClick ({ areaId: areaId, svgX: svgP.x, svgY: svgP.y });
    console.log ({ areaId: areaId, svgX: svgP.x, svgY: svgP.y });
  } // onAreaClick

  // private onPopStpClick (popStp: PopStp, event: MouseEvent) {
  //   let pt = this.mysvg.createSVGPoint ();
  //   pt.x = event.clientX;
  //   pt.y = event.clientY;
  //   let svgP = pt.matrixTransform (this.mymap.getScreenCTM ().inverse ());
  //   this.gameBoardService.onPopStpClick ({ popStp: popStp.popStp, svgAtx: svgP.x, svgAty: svgP.y });
  //   // console.log (svgP.x.toFixed(0) + ", " + svgP.y.toFixed(0));
  // } // onPopulationStepClick

}
