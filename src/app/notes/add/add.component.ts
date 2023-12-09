import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
})
export class AddComponent {
  private notesService = inject(NotesService);

  add(element: HTMLInputElement) {
    this.notesService.add(element.value);
    element.value = '';
  }
}
