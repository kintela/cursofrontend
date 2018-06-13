export class App {
  welcomeTitle='Bienvenido a Proyectos';

  constructor(){
  }

  attached(){
    var h1=document.getElementsByTagName('h1');
    h1[0].style.fontStyle='italic';

    window.setInterval(()=>{
      this.welcomeTitle=`Bienvenido a proyectos. Son las :${new Date().toString()}`;
    },1000)
  }
}
