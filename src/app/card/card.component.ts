import { Component, Input, OnChanges } from '@angular/core';
import { TITLES, JOBS, JOB_DESCRIPTIONS, PROJECTS, PROJECT_DESCRIPTIONS } from '../app.constants';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
    @Input() title: string;

    body = [];
    color = "";

    getSize(i: number) {
        return i % 2 ? '16px' : '20px';
    }

    ngOnChanges() {
        this.body = [];
        switch (this.title) {
            case TITLES.EXPERIENCE: {
                this.body[0] = JOBS.INTUIT_1;
                this.body[1] = JOB_DESCRIPTIONS.INTUIT_1;
                this.body[2] = JOBS.INTUIT_2;
                this.body[3] = JOB_DESCRIPTIONS.INTUIT_2;
                this.body[4] = JOBS.ID_TECH;
                this.body[5] = JOB_DESCRIPTIONS.ID_TECH;
                this.body[6] = JOBS.RIT;
                this.body[7] = JOB_DESCRIPTIONS.RIT;
                this.body[8] = JOBS.GOAT_FARM;
                this.body[9] = JOB_DESCRIPTIONS.GOAT_FARM;
                this.body[10] = JOBS.OSV;
                this.body[11] = JOB_DESCRIPTIONS.OSV;
                this.color = "#9CECF1"
                break;
            }
            case TITLES.PROJECTS: {
                this.body[0] = PROJECTS.HABIT_TRACKER;
                this.body[1] = PROJECT_DESCRIPTIONS.HABIT_TRACKER;
                this.body[2] = PROJECTS.WEBSITE;
                this.body[3] = PROJECT_DESCRIPTIONS.WEBSITE
                this.body[4] = PROJECTS.MESSENGER_PARSE;
                this.body[5] = PROJECT_DESCRIPTIONS.MESSENGER_PARSE;
                this.body[6] = PROJECTS.GB_ASM;
                this.body[7] = PROJECT_DESCRIPTIONS.GB_ASM;
                this.body[8] = PROJECTS.BINARY_CLOCK;
                this.body[9] = PROJECT_DESCRIPTIONS.BINARY_CLOCK;
                this.body[10] = PROJECTS.BOUNCE;
                this.body[11] = PROJECT_DESCRIPTIONS.BOUNCE;
                this.body[12] = PROJECTS.IMAGE_TO_SOUND;
                this.body[13] = PROJECT_DESCRIPTIONS.IMAGE_TO_SOUND;
                this.body[14] = PROJECTS.KITTEN_BOX;
                this.body[15] = PROJECT_DESCRIPTIONS.KITTEN_BOX;
                this.color = "#CEBEF0";
                break;
            }
        }
    }

}
