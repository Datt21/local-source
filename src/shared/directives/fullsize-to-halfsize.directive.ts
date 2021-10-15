import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[halfSize]'
})
export class FullSizeToHalfSizeDirective {
    private el: NgControl;

    constructor(ngControl: NgControl) {
        this.el = ngControl;
    }

    // Listen for the input event to also handle copy and paste.
    @HostListener('input', ['$event.target.value'])
    onInput(value: string) {
        // Use NgControl patchValue to prevent the issue on validation
        this.el.control.patchValue(
            value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            })
        );
    }
}
