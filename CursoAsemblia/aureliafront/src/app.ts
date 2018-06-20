import "bootstrap";
import { HttpClient } from "aurelia-fetch-client";
import { observable } from "aurelia-binding";
export class App {
  welcomeTitle = "Bienvenido a Proyectos";
  proyectos: any[] = [];
  @observable()
  filter:string=null;

  constructor() {
    const http = new HttpClient();

    http
      .fetch("http://fysegplannerwebapi.fyseg.com/api/projects")
      .then(r => r.json())
      .then(proy => {
        this.proyectos.push(...proy);
      });
  } 

  filterChanged(value,oldValue){
    const proyectosFiltrados=this.proyectos.filter(p=>(<string>p.id).startsWith(value));

    this.proyectos.splice(0,this.proyectos.length);

    this.proyectos.push(...proyectosFiltrados);
  }
}

