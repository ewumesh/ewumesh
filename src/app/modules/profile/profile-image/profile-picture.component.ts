import { Component, Inject, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Dimensions } from 'src/app/shred/image-cropper/interfaces/dimensions.interface';
import { ImageCroppedEvent } from 'src/app/shred/image-cropper/interfaces/image-cropped-event.interface';
import { ImageTransform } from 'src/app/shred/image-cropper/interfaces/image-transform.interface';
import { base64ToFile } from 'src/app/shred/image-cropper/utils/blob.utils';
import { SnackbarComponent } from 'src/app/shred/validations/snackbar/snackbar.component';
import { AuthService } from '../../authentication/auth.service';

@Component({
    templateUrl: './profile-picture.component.html'
})
export class ProfilePictureComponent implements OnDestroy {
    private readonly toDestroy$ = new Subject<void>();
    
    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};

    constructor(
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<ProfilePictureComponent>,
        private snackbarService: MatSnackBar,
        private authService: AuthService,
        @Inject(MAT_DIALOG_DATA)
        public data: any
    ) {

    }

    saveChanges() {
        let formData = this.data.content;
        formData.profilePic = this.croppedImage;
        // console.log(formData)
        this.authService.editUser(this.data.key, formData).pipe().subscribe(_ => {
            this.dialogRef.close(); 

            this.snackbarService.openFromComponent(SnackbarComponent, {
                data: 'Profile Picture updated Successfully!!',
                duration: 5000,
                verticalPosition: "top",
                horizontalPosition: "right"
            })
            this.dialogRef.close();
        })
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log(event, base64ToFile(event.base64));
    }

    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }

    cropperReady(sourceImageDimensions: Dimensions) {
        console.log('Cropper ready', sourceImageDimensions);
    }

    loadImageFailed() {
        console.log('Load failed');
    }

    rotateLeft() {
        this.canvasRotation--;
        this.flipAfterRotate();
    }

    rotateRight() {
        this.canvasRotation++;
        this.flipAfterRotate();
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
    }


    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }

    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }

    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {};
    }

    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }

    updateRotation() {
        this.transform = {
            ...this.transform,
            rotate: this.rotation
        };
    }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
