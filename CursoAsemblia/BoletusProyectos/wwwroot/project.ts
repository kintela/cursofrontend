import moment from './moment-with-locales';

export class Project{
    id:string;
    customerCode:string;
    name:string;
    tenderBudget:number;
    workStartDate:Date
    //declaro el parametro como opcional
    constructor(json?:any){
        //null no es undefined es un tipo de valor más pero esto es mejor que comparar solo json aprovechando que JS autocinvierte a boolean
        //por que esto te puede dar bugs si te llega un false
        if(json==undefined || json==null){
            return;
        }        
        Object.assign(this,json,{
            //workStartDate:new Date(json.workStartDate)
            //aqui seguimos recibiendo workstate como string asi que hay qye convertirlo a Date y esta propiedad machaca a la del json
            workStartDate:moment(json.workStartDate,'YYYY-MM-DD')
        });        
    }    
}