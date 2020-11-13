// from data.js

var tableData = data;


function ufoData(alien){ 
    
    var tbody = d3.select("tbody");
    
    if (alien.length != ""){
        d3.select ("#error").text("");
        tbody.text("")
        alien.forEach(function(ufo_sight){
            ufoTable = tbody.append("tr")
            Object.entries(ufo_sight).forEach(function([key, value]){
                filter_td = ufoTable.append("td").text(value)	
            })
        })
        
    }
    else {

        tbody.text("")
        
        d3.select("#error").text("Data not Found");
        
    }
}

ufoData(tableData);




var button = d3.select("#filter-btn");

// filtering the data for datetime

button.on('click', function (){

    d3.event.preventDefault(); 

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property('value');

   
    
    var filteredData =tableData.filter(ufo_sight =>{ 
        return (ufo_sight.datetime ===inputValue.toLowerCase()||!inputValue.toLowerCase())
        
    
    })
    
  

    ufoData(filteredData);


});


