import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-link',
    templateUrl: './nav-link.component.html'
})
export class NavLinkComponent {
    @Input() linkText: string;
    @Output() state = new EventEmitter<string>();

    updateState(s: string) {
        this.state.emit(s);
    }
}
