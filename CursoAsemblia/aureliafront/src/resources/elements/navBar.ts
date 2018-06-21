import { AppRouter } from "aurelia-router";
import { inject } from "aurelia-dependency-injection";

@inject(AppRouter)
export class NavBar {
  //esto crea la propiedad publica router
  constructor(public router:AppRouter){
 } 
}
