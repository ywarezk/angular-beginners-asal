import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  counter = 0

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.counter++;
    // }, 1000)
  }

  sayHello() {
    return 'hello world';
  }

  calculateClass() {
    // console.log('calculateClass');
    return `hello${this.counter}`
  }

  userTypedText(event: any) {
    console.log(`user changed text ${event.target.value}`);
  }

  clickedButton(event: any) {

  }
}
