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

  filterFunc(searchExpression, value) {
    let itemValue = value.text;
    if (!searchExpression || !itemValue) return false;

    return (
      itemValue.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1
    );
  }
}
