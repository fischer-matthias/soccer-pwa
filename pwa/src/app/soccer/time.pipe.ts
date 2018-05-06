import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soccerTime'
})
export class TimePipe implements PipeTransform {

  transform(value: number, halftime?: boolean): any {

    if (!halftime) {
      halftime = false;
    }

    let strMin = '00';
    let strSec = '00';

    if (value !== 0) {
      const min = Math.floor(value / 60);
      const sec = value % 60;

      if (!halftime && min >= 45) {
        strMin = '45';
        strSec = '00';

        const strMinDiff = (min - 45) + '';
        let strSecDiff: string;

        if (sec < 10) {
          strSecDiff = '0' + sec;
        } else {
          strSecDiff = sec + '';
        }

        return strMin + ':' + strSec + ' +' + strMinDiff + ':' + strSecDiff;
      } else {

        if (min < 10) {
          strMin = '0' + min;
        } else {
          strMin = min + '';
        }

        if (sec < 10) {
          strSec = '0' + sec;
        } else {
          strSec = sec + '';
        }
      }

      return strMin + ':' + strSec;
    }
  }

}
