import "bootstrap";
import { HttpClient } from "aurelia-fetch-client";
export class App {
  welcomeTitle = "Bienvenido a Proyectos";
  proyectos: any[] = [];

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
