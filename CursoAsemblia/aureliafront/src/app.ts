export class App {
  welcomeTitle='Bienvenido a Proyectos';

  constructor(){
  }

  attached(){
    var h1=document.getElementsByTagName('h1');
    h1[0].style.fontStyle='italic';
  }
}
