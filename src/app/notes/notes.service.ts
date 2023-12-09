import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes = signal<string[]>([]);

  add(text: string) {
    this.notes.update((items) => [...items, text]);
    console.log(this.notes());
  }
}
