import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private router = inject(Router);
  private notesService = inject(NotesService);

  notes = () => this.notesService.notes();

  edit(index: number) {
    this.router.navigate(['/notes/edit', index]);
  }
}
