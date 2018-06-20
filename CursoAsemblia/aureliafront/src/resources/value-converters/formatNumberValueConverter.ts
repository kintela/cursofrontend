import * as numeral from 'numeral';

export class formatNumberValueConverter {
  toView(value:Numeral | any, format:string):string{
    let valueAsNumeral: Numeral;

    if(!this.isNumeral(value)){
      valueAsNumeral=numeral(value);
    }else{
      valueAsNumeral=value;
    }

    return valueAsNumeral.format(format);
  }

  private isNumeral(value) : value is Numeral {
    return (<any>numeral).isNumeral(value);
  }
}


