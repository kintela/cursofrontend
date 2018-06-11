function getProject() {
    return fetch('http://fysegplannerwebapi.fyseg.com/api/projects/P0001634');
}
getProject().then(function (response) {
    if (!response.ok) {
        alert("Error en mi puta API");
    }
    return response.json().then(function (json) {
        var project = new Project(json);
        var codeElement = document.getElementById('code');
        codeElement.value = project.id;
        var nameElement = document.getElementById('name');
        nameElement.value = project.name;
        var dateElement = document.getElementById('date');
        dateElement.value = project.workStartDate.toDateString();
        var amountElement = document.getElementById('amount');
        amountElement.value = project.tenderBudget.toString();
    });
});
var Project = /** @class */ (function () {
    //declaro el parametro como opcional
    function Project(json) {
        //null no es undefined es un tipo de valor más pero esto es mejor que comparar solo json aprovechando que JS autocinvierte a boolean
        //por que esto te puede dar bugs si te llega un false
        if (json == undefined || json == null) {
            return;
        }
        Object.assign(this, json, {
            //workStartDate:new Date(json.workStartDate)
            //aqui seguimos recibiendo workstate como string asi que hay qye convertirlo a Date y esta propiedad machaca a la del json
            workStartDate: moment(json.workStartDate, 'YYYY-MM-DD')
        });
    }
    return Project;
}());
