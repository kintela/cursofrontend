import "bootstrap";
import { HttpClient } from "aurelia-fetch-client";
import { observable } from "aurelia-binding";
import { Proyecto } from "resources/proyecto";


export class App {
  welcomeTitle = "Bienvenido a Proyectos";
  proyectosOriginales: Proyecto[] = [];
  proyectosFiltrados: Proyecto[] = [];
  @observable()
  filter:string=null;

  constructor() {
    const http = new HttpClient();

    http
      .fetch("http://fysegplannerwebapi.fyseg.com/api/projects")
      .then(r => r.json())
      .then((json:any[]) =>json.map(p=>new Proyecto(p))) 
      .then(proyectos=>{
        this.proyectosOriginales.push(...proyectos);
        this.proyectosFiltrados.push(...proyectos);
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
    const proyectosEncontrados=this.proyectosOriginales.filter(p=>p.id.startsWith(valor));

    this.proyectosFiltrados.splice(0,this.proyectosFiltrados.length,...proyectosEncontrados);    
  }
}

