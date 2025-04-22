const { table } = require("console");

function fetchGradeData() {
    console.log("fetching the grade data...");
}

function populateGradebook(data){
    console.log("Populating gradebook with data:", data);
}

const gradeData = fetchGradeData();
populateGradebook(gradeData);

function fetchGradeData(){
    console.log("Fetching grade data...");

    let xhr = new XMLHttpRequest();

    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function(){
        let results;

    if (xhr.readyState !== xhr.DONE){
        if (xhr.status !== 200){
            console.error('Could not get grades. Status:', $ , {xhr,status});
        }
        populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

function populateGradebook(data){
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data", data);
    let tableEln = document.getElementById("gradebook");//Get the gradebook table element
    data.forEach(function(assignmnet){ // For each row of data we're passed in
        let row = document.createElement("tr"); //Create a table row element
        let colums = []; //Handy p;ace to stick the colums information
        colums.name = document.createElement('td'); // The first colum's table data will be the name
        colums.name.appendChild(
            // Concate the full name; "last_name, first_name"
            document.createTextNode(assignmnet.last_name + ", " + assignmnet.first_name)
        );
        colums.grade = document.createElement ('td');// second colum will be the grade
        colums.grade.appendChild(
            // Just put the name in text, you could be fancy abd figure out the letter grade here
            // with either a bunch of conditions, or a Javascript "switch" statement
            document.createTextNode(assignmnet.total_grade)
        );
        // Add the table data colums to the table row
        row.appendChild(colums.name);
        row.appendChild(colums.grade);
        // Add the row to the table itself to make the data visible
        tableEln.appendChild(row);
    });
}