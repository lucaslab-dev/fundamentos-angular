import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private notesService = inject(NotesService);
  notes = () => this.notesService.notes();
}
