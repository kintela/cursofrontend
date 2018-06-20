import "bootstrap";
import { HttpClient } from "aurelia-fetch-client";
import { observable } from "aurelia-binding";


export class App {
  welcomeTitle = "Bienvenido a Proyectos";
  proyectosOriginales: any[] = [];
  proyectosFiltrados: any[] = [];
  @observable()
  filter:string=null;

  constructor() {
    const http = new HttpClient();

    http
      .fetch("http://fysegplannerwebapi.fyseg.com/api/projects")
      .then(r => r.json())
      .then(proy => {
        this.proyectosOriginales.push(...proy);
        this.proyectosFiltrados.push(...proy);
      });
  } 

  filterChanged(value,oldValue){
    console.log(`filtrando por: ${value}`);
    this.aplicarFiltro(value);
  }

  filtrar(){
    this.aplicarFiltro(this.filter);
  }

  private aplicarFiltro(valor){
    const proyectosEncontrados=this.proyectosOriginales.filter(p=>(<string>p.id).startsWith(valor));

    this.proyectosFiltrados.splice(0,this.proyectosFiltrados.length,...proyectosEncontrados);    
  }
}

