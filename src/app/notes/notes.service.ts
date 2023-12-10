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

  getByIndex(index: number) {
    return this.notes().at(index);
  }

  add(text: string) {
    this.notes.update((items) => [...items, text]);
    console.log(this.notes());
  }

  edit({ index, note }: EditModel) {
    this.notes.update((items) =>
      items.map((value, i) => (i === index ? note : value))
    );
  }

  remove(index: number) {
    this.notes.update((items) => items.filter((_, i) => i !== index));
  }
}
