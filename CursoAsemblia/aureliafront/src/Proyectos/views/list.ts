import { ProyectosService } from './../services/proyectosService';
import { HttpClient } from "aurelia-fetch-client";
import { observable } from "aurelia-binding";
import { Proyecto } from "../models/proyecto";
import { inject } from 'aurelia-framework';

@inject(ProyectosService)
export class List {
  welcomeTitle = "Bienvenido a Proyectos";
  proyectosOriginales: Proyecto[] = [];
  proyectosFiltrados: Proyecto[] = [];
  @observable()
  filter:string=null;

  constructor(private proyectosService:ProyectosService) {
    const http = new HttpClient();

    this.proyectosService.getProyectos()
      .then(proyectos=>{
        this.proyectosOriginales.push(...proyectos);
        this.proyectosFiltrados.push(...proyectos);
      })
  } 

  filterChanged(value,oldValue){
    console.log(`filtrando por: ${value}`);
    this.aplicarFiltro(value);
  }

  filtrar(){
    this.aplicarFiltro(this.filter);
  }

  private aplicarFiltro(valor){
    const proyectosEncontrados=this.proyectosOriginales.filter(p=>p.id.startsWith(valor));

    this.proyectosFiltrados.splice(0,this.proyectosFiltrados.length,...proyectosEncontrados);    
  }
}

