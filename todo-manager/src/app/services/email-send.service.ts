import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root',
})
export class EmailSendService {
  baseUrl: string = 'http://localhost:8080/api/v1/email';

  constructor(private _http: HttpClient) {}

  sendEmailWithAttachment(data: Email, file: Blob) {
    let emailData = new FormData();
    emailData.append('emailData', JSON.stringify(data));
    emailData.append('file', file);
    return this._http.post(`${this.baseUrl}/attachment`, emailData);
  }
}
