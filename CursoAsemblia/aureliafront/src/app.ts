import 'bootstrap';
import {HttpClient} from 'aurelia-fetch-client';
export class App {
  welcomeTitle='Bienvenido a Proyectos';
  proyectos:any[]=[];

  constructor(){
    const http=new HttpClient();

    http.fetch('http://fysegplannerwebapi.fyseg.com/api/projects')
    .then(r=>r.json())
    .then(proy=>{
      this.proyectos.push(...proy);
    });
  }

  attached(){
    /*var h1=document.getElementsByTagName('h1');
    h1[0].style.fontStyle='italic';

    window.setInterval(()=>{
      this.welcomeTitle=`Bienvenido a proyectos. Son las :${new Date().toString()}`;
    },1000)*/
  }
}
