import { Injectable, signal } from '@angular/core';

interface EditModel {
  index: number;
  note: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes = signal<string[]>([]);

  add(text: string) {
    this.notes.update((items) => [...items, text]);
    console.log(this.notes());
  }

  edit({ index, note }: EditModel) {
    this.notes.update((items) =>
      items.map((value, i) => (i === index ? note : value))
    );
  }
}
