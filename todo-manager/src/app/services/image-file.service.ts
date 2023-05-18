import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ImageFileService {
  baseUrl = 'http://localhost:8080/api/v2/image-json';

  constructor(private _http: HttpClient) {}

  postUserData(user: User, file: Blob) {
    let formdata = new FormData();
    formdata.append('file', file);
    formdata.append('userData', JSON.stringify(user));

    return this._http.post(`${this.baseUrl}`, formdata);
  }
}
