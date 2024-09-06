import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Email } from '../models/email.model.';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private httpClient = inject(HttpClient);
  emails = signal<Email[] | undefined>(undefined)
  // 'http://localhost:3000/getemails'
  // 'Failed to fetch emails'

  private destroyRef = inject(DestroyRef);

  loadEmailData() {
    return this.fetchEmails('http://localhost:3000/getemails', 'Failed to fetch emails');
  }

  fetchEmails(url: string, errorMessage: string) {
    return this.httpClient.get<{emails: Email[]}>(url)
    .pipe(
      map((emailData) => emailData.emails),
      catchError((error) => {
        console.log(error);
        return throwError(
          () =>
            new Error(
              errorMessage
            )
          );
      })
    )
  }
}
