import { Component } from '@angular/core';

import {Media, MediaObject} from "@ionic-native/media";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    f1 : MediaObject;
    f2 : MediaObject;
    d1Duration: number = -5;
    d2Duration: number = -5;
    d1Cnt : number;
    d2Cnt: number;
    durationCnt1 : number = 0;
    durationCnt2 : number = 0;

  constructor( private audioFile: Media) {

  }

    PlayNotworking () {
        this.d1Cnt   = 0;
    this.f1 = this.audioFile.create("https://s3-us-west-2.amazonaws.com/series-stream/Warring+Spiritually/CD+4+-++Warring+Spiritually.mp3")
    this.f1.play();
    this.getDuration1();

    }

    Playworking () {
        this.d2Cnt = 0;
        this.f2 = this.audioFile.create("https://s3-us-west-2.amazonaws.com/series-stream/Fruitful+Repentance/CD+1+-++Fruitful+Repentance.mp3")
        this.f2.play();
        this.getDuration2();

    }
    StopNotworking () {
        this.f1.stop();
        this.f1.release();
        this.d1Cnt = 0;
        this.d1Duration = -5;
    }

    Stopworking () {
        this.f2.stop();
        this.f2.release();
        this.d2Cnt = 0;
        this.d2Duration = -5;
    }


    getDuration1()
    {
        setTimeout(() => {
        this.d1Cnt += 1;
            if (    this.d1Cnt > 8 ) {
                return;
            }

            this.d1Duration = this.f1.getDuration();
            console.log("checkDuration  duration = ", this.d1Duration, "d1Cnt = ", this.d1Cnt);
            if (this.d1Duration > 0 )
                return;
            this.getDuration1();

        }, 2000);

    }

    getDuration2()
    {
        setTimeout(() => {
            this.d2Cnt =  this.d2Cnt + 1;
            if ( this.d2Cnt > 8 ) {
                return;
            }
            this.d2Duration = this.f2.getDuration();
            console.log("checkDuration  duration = ", this.d2Duration, "d2Cnt = ", this.d2Cnt);
            if (this.d2Duration > 0 )
                return;
            this.getDuration2();
        }, 2000);

    }


}
