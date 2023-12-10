import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
})
export class EditComponent {
  noteIndex = -1;
  note?: string;

  private notesService = inject(NotesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    const index = this.route.snapshot.paramMap.get('index');

    if (index) {
      this.noteIndex = +index;
      this.note = this.notesService.getByIndex(this.noteIndex);
    }
  }

  edit(note: string) {
    this.notesService.edit({ index: this.noteIndex, note: note });
    this.router.navigate(['/notes']);
  }

  remove() {
    this.notesService.remove(this.noteIndex);
    this.router.navigate(['/notes']);
  }
}
