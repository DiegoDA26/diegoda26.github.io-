//const { table } = require("console");
//function fetchGradeData() {
//    console.log("fetching the grade data...");
//}

//function populateGradebook(data){
//    console.log("Populating gradebook with data:", data);
//}

//const gradeData = fetchGradeData();
//populateGradebook(gradeData);

fetchGradeData();

function fetchGradeData(){
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    //Thi is the address on the machine we're asking fot data
    let apiRoute = "/api/grades";
    // When the request change status, we run this anonymus function
    xhr.onreadystatechange = function(){
        let results;
        // Check if we are done
        if (xhr.readyState === xhr.DONE){
        //check if we are successful
            if (xhr.status !== 200){
                console.error(`Could not get grades.
                    Status: ${xhr.status}`);
        }
        //And then call the function to update the HTML with our data
        populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

function populateGradebook(data){
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data:", data);
    let tableElm = document.getElementById("gradebook");//Get the gradebook table element
    data.forEach(function(assignment){ // For each row of data we're passed in
        let row = document.createElement("tr"); //Create a table row element
        let colums = []; //Handy p;ace to stick the colums information
        colums.name = document.createElement('td'); // The first colum's table data will be the name
        colums.name.appendChild(
            // Concate the full name; "last_name, first_name"
            document.createTextNode(assignment.last_name + ", " + assignment.first_name)
        );
        colums.grade = document.createElement ('td');// second colum will be the grade
        colums.grade.appendChild(
            // Just put the name in text, you could be fancy abd figure out the letter grade here
            // with either a bunch of conditions, or a Javascript "switch" statement
            document.createTextNode(assignment.total_grade)
        );
        // Add the table data colums to the table row
        row.appendChild(colums.name);
        row.appendChild(colums.grade);
        // Add the row to the table itself to make the data visible
        tableElm.appendChild(row);
    });
}