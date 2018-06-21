import { Router } from 'aurelia-router';
import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration){
  let router:Router=config.container.get(Router);

  router.addRoute({
    route:'',
    name:'list',
    moduleId:PLATFORM.moduleName('proyectos/views/list'), nav:true, title:'Proyectos'
  });

  router.addRoute({
    route:'edit/:id',
    name:'edit',
    moduleId:PLATFORM.moduleName('proyectos/views/edit')
  });

}
