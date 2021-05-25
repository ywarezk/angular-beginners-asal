import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-tutorial';

  calculateName() {
    return 'Sweetness';
  }

  logHello(msg: string) {
    console.log(msg);
  }
}
