import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hawk',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    constructor(
        private router: Router
    ) {}

    title = 'Platea.us : Agility';
}
