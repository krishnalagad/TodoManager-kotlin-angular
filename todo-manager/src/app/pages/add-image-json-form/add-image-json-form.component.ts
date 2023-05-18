import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ImageFileService } from 'src/app/services/image-file.service';

@Component({
  selector: 'app-add-image-json-form',
  templateUrl: './add-image-json-form.component.html',
  styleUrls: ['./add-image-json-form.component.css'],
})
export class AddImageJsonFormComponent implements OnInit {
  user = new User('', '', '', '');
  file!: Blob;

  constructor(private _api: ImageFileService) {}
  ngOnInit(): void {}

  onChangeFileField(event: any) {
    this.user.imageName = event.target.files[0].name;
    this.file = event.target.files[0];
    console.log(this.file);
  }

  doRegister() {
    this._api.postUserData(this.user, this.file).subscribe({
      next: (data) => {
        console.log(data);
        alert('Done registration !!');
        this.user = new User('', '', '', '');
      },
      error: (err) => {
        console.log(err);
        alert('Error !!');
      },
      complete: () => {
        console.log('Request completed !!');
      },
    });
  }
}
