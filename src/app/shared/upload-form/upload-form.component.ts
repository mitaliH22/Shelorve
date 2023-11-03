import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    console.log('====================================');
    console.log(event);
    console.log('====================================');
    this.selectedFile = event.target.files[0];
  }
}
