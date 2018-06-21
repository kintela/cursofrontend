import { Proyecto} from './resources/proyecto';
import { HttpClient } from "aurelia-fetch-client";

interface EditParams{
  id:string;
}

export class Edit{
  proyecto:Proyecto;
  http:HttpClient;

  constructor() {
    this.http = new HttpClient();   
  } 

  activate(params:EditParams){
    this.http.fetch(`http://fysegplannerwebapi.fyseg.com/api/projects/${params.id}`)
    .then(r => r.json())
    .then(json=>{
      this.proyecto=new Proyecto(json);
    });
  }
}
