import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { collectionInOut } from 'src/app/shred/animations/animations';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.scss'],
    animations: [collectionInOut]
})
export class AboutComponent implements OnInit, OnDestroy {

    private readonly toDestroy$ = new Subject<void>();
    
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
