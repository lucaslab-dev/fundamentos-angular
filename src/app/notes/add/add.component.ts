import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  templateUrl: './add.component.html',
})
export class AddComponent {
  private router = inject(Router);
  private notesService = inject(NotesService);

  add(note: string) {
    this.notesService.add(note);
    this.router.navigate(['/notes']);
  }
}
