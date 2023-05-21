import { Component } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailSendService } from 'src/app/services/email-send.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent {
  email = new Email('', '', '');
  file: any = null;
  // fileInput: any;

  constructor(private _emailApi: EmailSendService) {
    // this.fileInput = document.getElementById("try");
  }

  onFileFieldChange(event: any) {
    this.file = event.target.files[0];
  }

  sendMail() {
    this._emailApi.sendEmailWithAttachment(this.email, this.file).subscribe({
      next: (data) => {
        alert('Email Sent !!');
        this.email = new Email('', '', '');
        this.file = null;
      },
      error: (err) => {
        console.log(err);
        if (err.status === 200) {
          alert('Email sent successfully !!');
          this.email = new Email('', '', '');
          this.file = null;
        } else {
          alert('Email not sent !!');
        }
      },
      complete: () => {
        console.log('Request completed !!');
      },
    });
  }

  // fileInput.addEventListener("change", (event: any) => {
  //   const selectedFile = event.target.files[0];
  //   const filePath = selectedFile.path;

  //   console.log(filePath);
  // });

  getFile(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const filePath: string = e.target.result;
      console.log(filePath);
    };

    reader.readAsDataURL(file);
  }
}
