import * as moment from "moment";
import * as numeral from "numeral";
import { Moment } from "moment";
import { computedFrom} from 'aurelia-binding';

export class Proyecto {
  constructor(json: any) {
    if (!json) {
      return;
    }

    Object.assign(this, json, {
      workStartDate: moment(json.workStartDate, "YYYY-MM-DD"),
      tenderBudget: numeral(json.tenderBudget),
    });
  }
  id: string;
  name: string;
  workStartDate: Moment;
  customerCode: string;
  tenderBudget: Numeral;
  
  @computedFrom('id','customerCode')
  get uniqueIdentifier():string{
    return this.id + "-" + this.customerCode
  }
}
