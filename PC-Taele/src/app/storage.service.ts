import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class StorageService {


    save_string_on_locale_storage(data: string) {
        localStorage.setItem("Test", data)
    }

    get_string_from_locale_storage() {
        console.log(localStorage.getItem("Test")?.toString())
    }
  }