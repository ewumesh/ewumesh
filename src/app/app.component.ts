import { Component } from '@angular/core';
import { collectionInOut, listAnimation } from './shred/animations/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [collectionInOut, listAnimation]
})
export class AppComponent {
  title = 'ewumesh';

  loggedUser = JSON.parse(localStorage.getItem('logged'));

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
