import { PLATFORM } from 'aurelia-pal';
import "bootstrap";
import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  configureRouter(config:RouterConfiguration,router:Router){
    config.title='Boletus Proyectos';

    config.map([
      //ruta por defecto que pueden ser varias
      {route:['','list'], name:'list', moduleId:PLATFORM.moduleName('./list') , nav:true, title:'Proyectos'},
      {route:'edit/:id', name:'edit', moduleId:PLATFORM.moduleName('./edit') },
    ]);
  }  
}

