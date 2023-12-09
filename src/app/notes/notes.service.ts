import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes = signal<string[]>([]);

  list() {
    return this.notes();
  }

  add(text: string) {
    this.notes.update((items) => [...items, text]);
    console.log(this.notes());
  }
}
