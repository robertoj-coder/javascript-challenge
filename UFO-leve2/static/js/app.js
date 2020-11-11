// // from data.js
var tableData = data;


var tbody = d3.select("tbody");

var tableData = data;

// select tbody 
tbody = d3.select("tbody")
// console.log("hello")

// loop through table using pbject entries
function displayData(something){ 
    tbody.text("")
    something.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

// displayData(tableData)

// console.log("hello2")


// Select the submit button
var button = d3.select("#filter-btn");

button.on("click", function() {
    // console.log("hello3")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Get the value property of the input element
  // console.log(dateInput.property("value"));
  // console.log(cityInput.property("value"));
  // console.log(stateInput.property("value"));
  // console.log(countryInput.property("value"));
  // console.log(shapeInput.property("value"));

  //create a variable which filters the table if a user enters only some information in so that it will still work

 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //run the filtered entries through the displayData function to update the table
 displayData(filtered);


});

var filterInputs = d3.selectAll('.form-control');

// Clears input fields and input object
function clearEntries() {
    filters = {};

    // Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Keeps page from refreshing completely, only want the table to refresh
    d3.event.preventDefault();
    // Clears input fields
    clearEntries()
});
















































// // Step 1: Loop Through `data` and log each sight report object
// // tableData.forEach(ufo_sight => {
// //   console.log(ufo_sight);

// //   //  Use d3 to append one table row `tr` for each weather report object
// //   var row = tbody.append("tr");

// //   // Step 3:  Use `Object.entries` to log each sight report value
// //   Object.entries(ufo_sight).forEach(([key, value]) => {
// //     console.log(key, value);

// //   //   // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// //     var cell = row.append("td");

 
// //     cell.text(value);
// //   });
// // });
// var button = d3.select("#filter-btn");

// button.on('click', function (){

//     // var inputDatetime = d3.select("#datetime").property('value');
//     // // var inputValue = inputElement.property('value');
//     // var inputCity = d3.select("#city").property('value');
//     // var inputState = d3.select("#state").property('value');
//     // var inputCountry = d3.select("#country").property('value');
//     // var inputShape = d3.select("#shape").property('value');

//     // var filteredData = tableData.filter(datetime === inputDatetime 
//     //                                     && city.toLowerCase() === inputCity.toLowerCase()
//     //                                     && state.toLowerCase() === inputState.toLowerCase()
//     //                                     && country.toLowerCase() === inputCountry.toLowerCase()
//     //                                     && shape.toLowerCase() === inputShape.toLowerCase());
    
    
//     var inputDatetime = d3.select("#datetime");
//     var inputCity = d3.select("#city");
//     var inputState = d3.select("#state");
//     var inputCountry = d3.select("#country");
//     var inputShape = d3.select("#shape");

//     var dateValue =  inputDatetime.property('value');
//     var cityValue = inputCity.property('value');
//     var stateValue = inputState.property('value');
//     var countryValue = inputCountry.property('value');
//     var shapeValue = inputShape.property('value');

    


//     var filteredData = tableData.filter(ufo_sight =>{
//      return (ufo_sight.datetime===dateValue || dateValue)  && 
//             (ufo_sight.city===cityValue.toLowerCase() || cityValue.toLowerCase()) &&
//             (ufo_sight.state===stateValue.toLowerCase() || stateValue.toLowerCase()) &&
//             (ufo_sight.country===countryValue.toLowerCase() || countryValue.toLowerCase()) &&
//             (ufo_sight.shape===shapeValue.toLowerCase() || shapeValue.toLowerCase())
          
//     });

//     filteredData.forEach(ufo_sight => {
//       console.log(ufo_sight);
    
//       //  Use d3 to append one table row `tr` for each weather report object
//       var row = tbody.append("tr");
    
//       // Step 3:  Use `Object.entries` to log each sight report value
//       Object.entries(ufo_sight).forEach(([key, value]) => {
//         console.log(key, value);
    
//       //   // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
//         var cell = row.append("td");
    
     
//         cell.text(value);
//       });
//     });
//     // console.log(filteredData);

    
//     //   tbody.html("");
      
     
//     // var tbody = d3.select('tbody');

//     // tbody.html("");

//     // filteredData.forEach(ufoData => {
//     //   console.log(ufoData);

//     //   var row = tbody.append('tr');

//     //   Object.entries(ufoData).forEach(([key, value]) => {
//     //   console.log(key, value);

//     //   var cell = row.append('td');
//     //   cell.text(value);
//     //   };
//     // });  
//   // });
//     // var filteredData = tableData.filter(ufo_sight =>{
//     // return (ufo_sight.datetime===inputDatetime.property("value") || inputDatetime.property("value"))  && 
//     //         (ufo_sight.city===inputCity.property("value") || inputCity.property("value")) &&
//     //         (ufo_sight.state===inputState.property("value") || inputState.property("value")) &&
//     //         (ufo_sight.country===inputCountry.property("value") || inputCountry.property("value")) &&
//     //         (ufo_sight.shape===inputShape.property("value") || inputShape.property("value"))
//     // });
    
    
//     // var filteredData = tableData.filter(ufo_sight =>{
//     // return (ufo_sight.datetime===inputDatetime ) && 
//     //         (ufo_sight.city===inputCity) &&
//     //         (ufo_sight.state===inputState) &&
//     //         (ufo_sight.country===inputCountry) &&
//     //         (ufo_sight.shape===inputShape)
//     // });
    
//     // console.log(filteredData);

//   //  console.log(filteredData);

    
    
    
    
    
    
    
    
    
                                  


//     // var tbody = d3.select('tbody');

//     // tbody.html("");
//     // // console.log(inputValue);
//     // // console.log(tableData);

//     // console.log(filteredData);


//     // filteredData.forEach(ufoData => {
//     //     console.log(ufoData);

//     //     var row = tbody.append('tr');

//     //     Object.entries(ufoData).forEach(([key, value]) => {
//     //     console.log(key, value);

//     //     var cell = row.append('td');
//     //     cell.text(value);

//     //     });

//     // });

//     // // var table = tbody.append('tr');

//     // var table = d3.select('#ufo-table>tbody);

//     // table.html("");



//     // table.append('td').text(datetime);
//     // table.append('td').text(city);
//     // table.append('td').text(state);
//     // table.append('td').text(country);
//     // table.append('td').text(shape);
//     // table.append('td').text(durationMinutes);
//     // table.append('td').text(comments);




// });

