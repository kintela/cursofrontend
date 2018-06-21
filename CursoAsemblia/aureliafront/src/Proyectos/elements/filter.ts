import { Proyecto } from '../models/proyecto';
import { observable } from "aurelia-binding";
import { bindable } from 'aurelia-framework';

export class Filter{
  @bindable()
  proyectosOriginales:Proyecto[]=[];

  @bindable()
  proyectosFiltrados:Proyecto[]=[];

  @observable()
  filter:string=null;

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
