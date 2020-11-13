// // from data.js


var tableData = data;


var tbody = d3.select("tbody");

// var tableData = data;

// select tbody 
// tbody = d3.select("tbody")



function ufoData(alien){ 
    tbody.text("")
    alien.forEach(function(ufo_sight){
    ufoTable = tbody.append("tr")
    Object.entries(ufo_sight).forEach(function([key, value]){
        ufo_td = ufoTable.append("td").text(value)	
    })
})}

ufoData(tableData);




// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  

      var inputDatetime = d3.select("#datetime");
      var inputCity = d3.select("#city");
      var inputState = d3.select("#state");
      var inputCountry = d3.select("#country");
      var inputShape = d3.select("#shape");
  
      var dateValue =  inputDatetime.property('value');
      var cityValue = inputCity.property('value');
      var stateValue = inputState.property('value');
      var countryValue = inputCountry.property('value');
      var shapeValue = inputShape.property('value');
  
      
  
     
      var filteredData = tableData.filter(ufo_sight =>{
       return (ufo_sight.datetime===dateValue || !dateValue)  && 
              (ufo_sight.city===cityValue.toLowerCase() || !cityValue.toLowerCase()) &&
              (ufo_sight.state===stateValue.toLowerCase() || !stateValue.toLowerCase()) &&
              (ufo_sight.country===countryValue.toLowerCase() || !countryValue.toLowerCase()) &&
              (ufo_sight.shape===shapeValue.toLowerCase() || !shapeValue.toLowerCase())

      });

  
 ufoData(filteredData);

      

});

