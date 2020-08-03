import { Component } from '@angular/core';
import { TITLES, INTRO } from '../app.constants';

@Component({
    selector: 'welcome-bar',
    templateUrl: './welcome-bar.component.html',
    styleUrls: ['./welcome-bar.component.scss']
})
export class welcomeBarComponent {
    title = TITLES.WELCOME;
    body = INTRO;
}
