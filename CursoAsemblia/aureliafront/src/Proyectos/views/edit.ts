import { Proyecto} from '../models/proyecto';
import { HttpClient } from "aurelia-fetch-client";
import { ProyectosService } from '../services/proyectosService';
import { inject } from 'aurelia-framework';

interface EditParams{
  id:string;
}

@inject(ProyectosService)
export class Edit{
  proyecto:Proyecto;
  http:HttpClient;

  constructor(private proyectosService:ProyectosService) {
    
  } 

  activate(params:EditParams){
    this.proyectosService.getProyecto(params.id)
      .then(proy=>this.proyecto=proy);
  }
}
