import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  imgChangeEvt: any = "";
  cropImgPreview: any = '';
  displayCroppedImage: string | undefined;

  onFileChange(event: any) {
    this.imgChangeEvt = event;
  }

  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
    console.log('Cropped image is ', e);
    console.log('Cropped image preview:', this.cropImgPreview); // Ensure that the cropped image preview is assigned correctly
  }
  

  saveChanges() {
    // Perform actions when user clicks "Save Changes"
    // For example, you can display the cropped image or save it to the server
    console.log('Save Changes clicked');
    console.log('Cropped image preview:', this.cropImgPreview);

    // Set the cropped image preview to be displayed in the HTML
    this.displayCroppedImage = this.cropImgPreview;
  }

  imgLoad() {
    // Handle image load event if needed
  }

  initCropper() {
    // Initialize cropper if needed
  }

  imgFailed() {
    alert("Image failed to load");
  }
}
