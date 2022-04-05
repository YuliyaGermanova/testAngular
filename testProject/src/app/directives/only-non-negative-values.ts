import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[numberOnly]'
})

export class OnlyNonNegativeValuesDirective {

    private regex: RegExp = new RegExp(/^\d+$/g);
    private specialKeys = ['Backspace', 'Tab', 'End', 'Home'];

    constructor(private elementRef: ElementRef) { }

    @HostListener('keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) > -1) {
            return;
        }
        let current: string = this.elementRef.nativeElement.value;
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}