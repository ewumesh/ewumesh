import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, merge, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

/**
 * When user try to submit the form without touching it where the form has at least one or more field(s) are required.
 */
export const formErrorMessage = 'All fields marked with an asterisk (*) are required. Please check the form below.';

export interface MessageModel {
    [key: string]: { [key: string]: string };
}
// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
export class GenericValidator {

    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    constructor(private validationMessages: MessageModel) { }

    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    processMessages(container: FormGroup): { [key: string]: string } {
        const messages = {};
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof FormGroup) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                } else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';

                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }

    /**
     * Debouncing and processing validation 
     * @param form FormGroup to listen value changes event
     * @param formInputElements array of Form Control to listen event (default is blur)
     */
    initValidationProcess(form: FormGroup, formInputElements: ElementRef<any>[]) {
        const controlBlurs: Observable<any>[] = formInputElements
            .map(fCtrl => fromEvent(fCtrl.nativeElement, 'blur'));
        const messages = merge(form.valueChanges, ...controlBlurs)
            .pipe(
                debounceTime(800),
                map(_ => this.processMessages(form)),
            );
        return messages;
    }
}

/**
 * Checks (form.invalid) to ensure error messages to display before submiting an invalid form.
 * @param form FormGroup to check validation and mark all properties as dirty
 * @param element HTML element to scroll where error message being displayed if any
 */
export function validateBeforeSubmit(form: FormGroup, element?: HTMLElement) {

    if (form.valid) return null;

    // if an user tries to submit form without changing values or required fields are still yet to get filled,
    // make all properties as dirty.
    Object.keys(form.controls).map(a => {
        const ctrl = form.controls[a];
        ctrl.markAsDirty();
        ctrl.updateValueAndValidity();
    });

    if (element) {
        const vw = setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
            clearTimeout(vw);
        }, 100);
    }

    return formErrorMessage;
}
