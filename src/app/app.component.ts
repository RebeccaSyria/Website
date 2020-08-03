import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  linkNames = ['Experience', 'Projects'];
  state = 'Experience';

  onUpdateState(state: string) {
      this.state = state;
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
}
