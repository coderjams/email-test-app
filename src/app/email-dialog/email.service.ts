import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  httpClient = inject(HttpClient);

  constructor() {}

  fetchEmails() {
    this.httpClient.get('http://localhost:3000/getemails').subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
