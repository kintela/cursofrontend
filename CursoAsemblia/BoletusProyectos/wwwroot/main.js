function getProject() {
    return fetch('http://fysegplannerwebapi.fyseg.com/api/project/P0001634');
}
getProject().then(function (response) {
    if (!response.ok) {
        alert("Error en mi puta API");
    }
    return response.json().then(function (project) {
        var codeElement = document.getElementById('code');
        codeElement.value = project.id;
        var nameElement = document.getElementById('name');
        nameElement.value = project.name;
        var dateElement = document.getElementById('date');
        dateElement.value = project.workstartdate;
        var amountElement = document.getElementById('amount');
        amountElement.value = project.tenderbudget;
    });
});
