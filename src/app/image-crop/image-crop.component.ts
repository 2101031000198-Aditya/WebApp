import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserService } from '../service/image.service';

export type CropperDialogData = {
  image: File;
  width: number;
  height: number;
}

export type CropperDialogResult = {
  blob: Blob;
  imageUrl: string;
}

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent {
  data: CropperDialogData = inject(MAT_DIALOG_DATA);
  result = signal<CropperDialogResult | undefined>(undefined);

  constructor(private userService: UserService) { }
  // imageCroppeds(event: ImageCroppedEvent) {
  //   const { blob } = event;
  //   if (blob) {
  //     this.convertToBase64(blob);
  //   }
  // }
  imageCropped(event: ImageCroppedEvent) {
    const { blob, objectUrl } = event;
    if (blob && objectUrl) {
      this.result.set({ blob, imageUrl: objectUrl });
      this.convertToBase64(blob);

    }
  }
  Username = 'adiking';
  base64data!: string;

  convertToBase64(blob: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      this.base64data = (reader.result as string).split(',')[1];
      console.log('Base64 image:', this.base64data);
    };
  }


  updateUser() {

    this.userService.updatePhoto(this.Username, this.base64data).subscribe(() => {
      alert('User updated successfully');

    });
  }
}






