import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  linkNames = ["welcome", "about", "experience", "projects", "contact"];
  state = "test";

  onUpdateState(state: string) {
      this.state = state;
  }
}
