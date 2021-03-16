import { animate, AnimationBuilder, AnimationPlayer, keyframes, style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { debounceTime, filter, map } from 'rxjs/operators';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Injectable()
export class ExtendedMatDialog {

    private player: AnimationPlayer;

    constructor(private animationBuilder: AnimationBuilder) { }

    /**
     * play animation when dialog backdrop clicks.
     * @param instance And instance of dialog
     */
    animateBackdropClick<T extends MatDialogRef<any>>(instance: T) {

        instance.backdropClick().pipe(
            debounceTime(400),
            map(_ => document.getElementById(instance.id)),
            filter(_ => _ !== undefined),
        ).subscribe(el => this.animate(el));
        return this;
    }

    /**
     * Enable/disable opacity to dialog container when drag move. 
     * @param drag An instance of CdkDrag to process.
     */
    makeTransparentWhenDragMmove(drag: CdkDrag, ) {

        setTimeout(() => {
            const dialogWrapper = <HTMLElement>document.querySelector('.cdk-overlay-pane');
            if (!dialogWrapper) return;

            dialogWrapper.style.transition = 'opacity .4s';

            drag.started.subscribe(_ => dialogWrapper.style.opacity = '0.35');
            drag.ended.subscribe(_ => dialogWrapper.style.opacity = '1');
        }, 1000);
        return this;
    }

    private animate(el: HTMLElement) {
        if (!el) return;
        if (this.player) this.player.destroy();
        this.player = this.animationBuilder
            .build([
                animate('.7s', keyframes([
                    style({ transform: 'rotate3d(0, 0, 1, 17deg)', offset: 0.20 }),
                    style({ transform: 'rotate3d(0, 0, 1, -12deg)', offset: 0.40 }),
                    style({ transform: 'rotate3d(0, 0, 1, 6deg)', offset: 0.60 }),
                    style({ transform: 'rotate3d(0, 0, 1, -6deg)', offset: 0.80 }),
                    style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }),
                ]))
            ])
            .create(el);

        this.player.play();
    }
}
