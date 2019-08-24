import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
    @Input() title: string;

    body = [];

    ngOnChanges() {
        this.body = [];
        switch (this.title) {
            case 'Welcome': {
                this.body[0] = 'Hello and welcome! I\'m Rebecca Syria, a computer science student at RIT \
                    with an expected graduation of December 2020. I have a strong interest in both front and back end \
                    software engineering, as well as game development. Feel free to take a look a look around the Projects \
                    and Experience sections to see what I\'ve done!';
                this.body[1] = 'Please pardon any dust, this website is still under construction!';
                break;
            }
            case 'About': {
                this.body[0] = 'test about';
                break;
            }
            case 'Experience': {
                this.body[0] = 'Part-Time Remote Co-Op - Intuit - Fall 2019';
                this.body[2] = 'Software Engineering Co-Op - Intuit - Spring-Summer 2019';
                this.body[4] = 'Summer Camp Instructor - IdTech - Summer 2018';
                this.body[6] = 'Computer Science 1 Grader - RIT - Fall 2017';
                this.body[8] = 'Farm Hand - Red Goat Farm - Fall 2015-Summer 2016, Summer 2017, May-June 2018';
                this.body[10] = '4-H Intern - Old Sturbridge Village - Summer 2013, Summer 2014, Summer 2015';
                break;
            }
            case 'Contact': {
                this.body[0] = 'Github: https://github.com/RebeccaSyria';
                this.body[1] = 'LinkedIn: https://www.linkedin.com/in/rebeccasyria/';
                this.body[2] = 'Email: RebeccaESyria@gmail.com';
                break;
            }
            case 'Projects': {
                this.body[0] = 'Personal Website - Summer 2018-Ongoing - You\'re looking at it! Written in Angular.';
                this.body[1] = 'Messenger Parse - December 2018-Ongoing - Javascript tool to parse and display data on Facebook \
                Messenger conversations such as how many messages per participant, words per participant and other statistics';
                this.body[2] = 'GameBoy Assembly Learning Project - Spring 2018 - Small game I created to learn the basics of assembly';
                this.body[3] = 'Binary Clock - Spring 2018 - A command line binary clock written in C';
                this.body[4] = 'Bounce - Spring 2017 - Small Javascript game coded in 48 hours for Ludum Dare 38';
                this.body[5] = 'Image To Sound - December 2016 - Python tool to convert images to midi sound files using pixel values';
                this.body[6] = 'KittenBox - Fall 2016 - Team game jam project coded in 24 hours using Processing.';
                break;
            }
        }
    }

}
