import "bootstrap";
import { HttpClient } from "aurelia-fetch-client";
export class App {
  welcomeTitle = "Bienvenido a Proyectos";
  proyectos: any[] = [];
  searchTerm: string = "";

  constructor() {
    const http = new HttpClient();

    http
      .fetch("http://fysegplannerwebapi.fyseg.com/api/projects")
      .then(r => r.json())
      .then(proy => {
        this.proyectos.push(...proy);
      });
  } 
}

export class filtroProyectoIdValueConverter{
  toView(proyectos,filtro){
    if(filtro!=undefined){
      return proyectos.filter(proyecto=>proyecto.id.toUpperCase().startsWith(filtro.toUpperCase()));
    }
    else{
      return proyectos;
    }
  };
}
