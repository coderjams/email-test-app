import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailDialogComponent } from "./email-dialog/email-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
