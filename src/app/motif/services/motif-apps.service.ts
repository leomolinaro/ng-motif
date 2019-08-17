import { Injectable } from '@angular/core';
import { MotifApp } from 'src/app/shared/models/motif-app';

const appIds = ["agot", "brit"];
const appMap: { [code: string]: MotifApp } = {
  agot: {
    title: "A Game of Thrones LCG (second edition)",
    imageUrl: "assets/agot/logo.jpg",
    id: "agot",
    route: "/agot"
  }, // agot
  brit: {
    title: "Britannia",
    imageUrl: "assets/brit/logo.jpg",
    id: "brit",
    route: "/brit"
  } // brit
} // appMap

@Injectable({
  providedIn: 'root'
})
export class MotifAppsService {

  constructor () { }

  getApps (): MotifApp[] {
    return appIds.map (id => appMap[id]);
  } // getApps

  getAppById (appId: string) {
    return appMap[appId];
  } // getAppById

} // MotifAppsService
