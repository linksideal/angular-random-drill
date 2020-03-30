import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/alarm.wav";
    audio.load();
    audio.play();
  }
}
