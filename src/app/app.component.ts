import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  linkNames = ['Welcome', 'Experience', 'Projects', 'Contact'];
  state = 'Welcome';

  onUpdateState(state: string) {
      this.state = state;
  }
}
