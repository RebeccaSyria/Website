import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-hamburger-button',
    templateUrl: './hamburger-button.component.html',
    styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent {
    @Output() state = new EventEmitter<string>();
    clicked = false;
    linkNames = ['Welcome', 'Experience', 'Projects', 'Contact'];
    updateState(s: string) {
        this.state.emit(s);
        this.clicked = false;
    }

    onClick() {
        this.clicked = !this.clicked;
        console.log(this.clicked);
    }
}
