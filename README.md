## UFOs Module 11 Challenge

In this project, a dynamic web table is created to display UFO sighting data which is stored in a JavaScript array, with filtering capabilities based on various criteria that an user wishes to input.

For this project the following technologies were applied:
 - D3 is a JavaScript library that generates highly dynamic graphics in an HTML webpage.  For this project, D3.select was used to tell JavaScript to look for the HTML tags.
 - Arrow functions (=>) condense the traditional functions by eliminating the function keyword and the return keyword.
 - forEach function loops through the array in the same way as a for loop and can be combined with an arrow function. In this project, forEach function loops through each data row to look for key value pair match of each filter.
 - Object methods returns array obejcts.  Object.values returns an array of values for table cells and Object.entries returns an array of key,value pairs for the filters in this project.
 - D3 event listener (d3.selectAll("input")) was used to reflect any changed in the input fields to trigger dynamic filtering.
 - D3 event listener (d3.select()) is used to link the JS code to the "clear filter" button in the HTML so that it can reset the filters and brings the original data.

 To achieve a professional look of the web page, the following Bootstrap elements have been used:
 - The Bootstrap Grid System: organizing a webpage's content into containers, rows, and columns. It also allows for a responsive webpage.
 - Navbar: Bootstrap's built-in styling and creates responsive navigation header.
 - Jumbotron: providing styling based on the tags.
 - The class="btn btn-info" was used to apply Bootstrap styling.
 - The class="form-control" from input groups was used to enhance each input fields.

 Recommendation for further development:
 - Filtering could be improved by providing the drop-down menus to the users to choose filtering parameters instead of free text.

 