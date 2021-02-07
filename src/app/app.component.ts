import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'ewumesh';

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && 
  //     outlet.activatedRouteData && 
  //     outlet.activatedRouteData['animationState'];
  //  }
}
