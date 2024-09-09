import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { EmailService } from './email.service';
import { Email } from '../models/email.model.';

@Component({
  selector: 'app-email-dialog',
  standalone: true,
  imports: [],
  templateUrl: './email-dialog.component.html',
  styleUrl: './email-dialog.component.css'
})
export class EmailDialogComponent implements OnInit {
  emails = signal<Email[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  error = signal<string>('');
  closeDialog = signal(false);
  private emailService = inject(EmailService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
   const subscription =
   this.emailService.loadEmailData()
   .subscribe({
      next: (emails) => {
        this.emails.set(emails);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
   }

   onCloseDialog() {
    this.closeDialog.set(true);
    console.log(this.closeDialog())
   }

   onOpenDialog() {
    this.closeDialog.set(false);
   }
  }

