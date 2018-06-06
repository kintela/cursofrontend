function getProject():Promise<Response>{
    return fetch('http://fysegplannerwebapi.fyseg.com/api/project/P0001634');
}

getProject().then(response=>{
    if(!response.ok){
        alert("Error en mi puta API");
    }

    return response.json().then(project=>{
       const codeElement=<HTMLInputElement>document.getElementById('code');
       codeElement.value=project.id;

       const nameElement=<HTMLInputElement>document.getElementById('name');
       nameElement.value=project.name;

       const dateElement=<HTMLInputElement>document.getElementById('date');
       dateElement.value=project.workstartdate;

       const amountElement=<HTMLInputElement>document.getElementById('amount');
       amountElement.value=project.tenderbudget;

    });
});