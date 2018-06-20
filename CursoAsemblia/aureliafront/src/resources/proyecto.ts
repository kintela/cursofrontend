import * as moment from 'moment';
import * as numeral from 'numeral';
import { Moment } from 'moment';

export class Proyecto{
  constructor(json:any){
    if(!json){
      return;
    }

    Object.assign(this,json,{
      workStartDate:moment(json.workStartDate,'YYYY-MM-DD'),
      tenderBudget:numeral(json.tenderBudget)
    });
  }
  id:string;
  name:string;
  workStartDate:Moment;
  customerCode:string;
  tenderBudget:Numeral;
}
