import * as moment from 'Moment';
import { Moment } from 'Moment';

export class formatDateValueConverter {
  toView(value:Moment | any, format:string):string{
    let valueAsMoment: Moment;

    if(!moment.isMoment(value)){
      valueAsMoment=moment(value);
    }else{
      valueAsMoment=value;
    }

    return valueAsMoment.format(format);
  }

}
