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

function updateFilters() {
    // Keep track of all filters
    var filters = {};
    // Make D3 look for each id in the HTML tags and hold it in the filters object.
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    filters["datetime"]=date;
    filters["city"]=city;
    filters["state"]=state;
    filters["country"]=country;
    filters["shape"]=shape;
    
    // Set a default filter and save it to a new variable.
    let filteredData = tableData;

    Object.entries(filters).forEach(([key,value])=> {
        if (value != ""){
            // Apply `filter` to the table data to only keep the
            // rows where each key's value matches the filter value
            filteredData = filteredData.filter(row => row[key] == value);
        };
    })
 

    // Rebuild the table using the filtered data
    //@NOTE: If no date was entered, then filteredData will
    //just be the original tableData.
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click",updateFilters);

//Build the table when the page loads
buildTable(tableData);



