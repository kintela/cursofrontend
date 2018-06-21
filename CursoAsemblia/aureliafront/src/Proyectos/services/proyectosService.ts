import { HttpClient } from 'aurelia-fetch-client';
import { Proyecto } from '../models/proyecto';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class ProyectosService{
  constructor(private http:HttpClient){

  }

  getProyectos():Promise<Proyecto[]>{
    return this.http
      .fetch("/projects")
      .then(r => r.json())
      .then((json:any[]) =>json.map(p=>new Proyecto(p))) 
  }


  getProyecto(id:string):Promise<Proyecto>{
    return this.http
      .fetch(`projects/${id}`)
      .then(r => r.json())
      .then(json =>new Proyecto(json)); 
  }
}
