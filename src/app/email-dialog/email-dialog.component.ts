import { Component, inject, OnInit } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email-dialog',
  standalone: true,
  imports: [],
  templateUrl: './email-dialog.component.html',
  styleUrl: './email-dialog.component.css'
})
export class EmailDialogComponent implements OnInit {

  emailService = inject(EmailService);

  constructor() { }

  ngOnInit(): void {
    this.emailService.fetchEmails();
  }
}
