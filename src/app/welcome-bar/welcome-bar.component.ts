import { Component } from '@angular/core';

@Component({
    selector: 'welcome-bar',
    templateUrl: './welcome-bar.component.html',
    styleUrls: ['./welcome-bar.component.scss']
})
export class welcomeBarComponent {
    title = "Welcome";
    body = [
        "Hello!",
        "My name is Rebecca Syria and I am computer science student \
    at RIT. I have a strong interest in both front and back end software engineering, \
    as well as game development.",
    "Available for full-time hire starting Late December 2020!"
    ];
}
