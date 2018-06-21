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
 
  constructor(private proyectosService:ProyectosService) {
    const http = new HttpClient();

    this.proyectosService.getProyectos()
      .then(proyectos=>{
        this.proyectosOriginales.push(...proyectos);
        this.proyectosFiltrados.push(...proyectos);
      })
  } 

}

