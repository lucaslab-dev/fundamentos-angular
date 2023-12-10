import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
})
export class AddComponent {
  note?: string;
  private router = inject(Router);
  private notesService = inject(NotesService);

  add() {
    this.notesService.add(this.note!);
    this.router.navigate(['/notes']);
  }
}
