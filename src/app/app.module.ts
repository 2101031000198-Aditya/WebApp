import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import{ImageCropperModule} from 'ngx-image-cropper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { ImageControlComponent } from './image-control/image-control.component';
import{MatButtonModule} from '@angular/material/button';
import{MatDialogModule} from '@angular/material/dialog';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    ImageCropComponent,
    ImageControlComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ImageCropperModule, BrowserAnimationsModule,MatButtonModule,MatDialogModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// {provide: HAMMER_GESTURE_CONFIG,
  // useClass: MyHammerConfig}
  // import 'hammerjs';
// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// import * as Hammer from 'hammerjs';


// @Injectable()
// export class MyHammerConfig extends HammerGestureConfig {
//   override overrides = <any>{
//     'pinch': { enable: true },
//     'rotate': { enable: true }
//   };
// }