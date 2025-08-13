import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageService } from './storage.service';
import { MainTableComponent } from './main-table/main-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PC-Taele';
  constructor(private storageService: StorageService) {
  }

  save_string(text: string) {
    this.storageService.save_string_on_locale_storage(text)
  }

  load_string() {
    this.storageService.get_string_from_locale_storage()
  }
}
