import { Component } from '@angular/core';

@Component({
    selector: 'app-main-table',
    imports: [],
    templateUrl: './main-table.component.html',
    styleUrl: './main-table.component.css'
})
export class MainTableComponent {
    archers = [
  { id: 1, name: 'Anna', email: 'anna@example.com' },
  { id: 2, name: 'Max', email: 'max@example.com' }
]
}
