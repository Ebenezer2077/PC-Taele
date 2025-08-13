import { RouterOutlet } from '@angular/router';
import { MainTableComponent } from './main-table/main-table.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MainTableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PC-Taele';
}
