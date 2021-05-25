import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  // @HostListener('click')
  // logButtonClicked() {
  //   console.log('the button is clicked');
  // }

  constructor(private _element: ElementRef) {
    console.log(_element);
    _element.nativeElement.addEventListener('click', () => {
      console.log('the button is clicked');
    })
  }

}
