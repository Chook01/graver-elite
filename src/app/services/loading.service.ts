import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  isFullscreenLoading: boolean = true;

  hideFullscreenLoading(){
    this.isFullscreenLoading = false;
  }

  showFullscreenLoading(){
    this.isFullscreenLoading = true;
  }

}
