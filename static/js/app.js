// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a table and pass data as the argument and clear data.
function buildTable(data){
    // First, clear out any existing data.
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Keep track of all filters
let filters = {};

function updateFilters() {

    // Save the element, value and id of the filter that was changed.
    let changedElement = d3.select(this);
    let filterValue = changedElement.property("value").trim();
    let filterId = changedElement.attr("id");
    
    // If a filter value was entered then add that filterId and value
    // to the filters list.
    if (filterValue){
        filters[filterId] = filterValue;
    }
    // Otherwise, clera that filter from the filters object
    else {
        delete filters[filterId];
    }
    // Call function to apply all filters and rebuild the table
    filterTable();
}
   
function filterTable(){
    // Set the filteredData to the tableData
    let filteredData = tableData;
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value])=> {
            filteredData = filteredData.filter(row => row[key] == value);
    })
    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

function clearFilters(){
d3.selectAll("input").property("value","")
filters = {}
buildTable(tableData);
}

//Attach an eventlistener for any input change
d3.selectAll("input").on("change",updateFilters);
//Attach an eventlistener for the reset button
d3.select("#clear-btn").on("click",clearFilters);

//Build the table when the page loads
buildTable(tableData);



