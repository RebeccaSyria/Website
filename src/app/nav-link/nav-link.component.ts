import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'app-nav-link',
    templateUrl: './nav-link.component.html',
    styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnChanges {
    @Input() linkText: string;
    @Input() currentState: string;
    @Output() state = new EventEmitter<string>();

    isActive = false;
    ngOnChanges() {
        if (this.currentState === this.linkText) {
            this.isActive = true;
        } else {
            this.isActive = false;
        }
    }
    updateState(s: string) {
        this.state.emit(s);
    }
    getColor(s: string) {
        switch(s){
            case("Projects"):
                return "#CEBEF0";
            default:
                return "#9CECF1";
        }
    }
}
