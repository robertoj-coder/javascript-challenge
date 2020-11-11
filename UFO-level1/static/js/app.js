// from data.js
var tableData = data;

var button = d3.select("#filter-btn");



button.on('click', function (){

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(date =>date.datetime.toLowerCase() === inputValue.toLowerCase());
    var tbody = d3.select('tbody');

    tbody.html("");
    // console.log(inputValue);
    // console.log(tableData);

    console.log(filteredData);


    filteredData.forEach(ufoData => {
        // console.log(ufoData);

        var row = tbody.append('tr');

        Object.entries(ufoData).forEach(([key, value]) => {
        console.log(key, value);

        var cell = row.append('td');
        cell.text(value);

        });

    });

    // // var table = tbody.append('tr');

    // var table = d3.select('#ufo-table>tbody);

    // table.html("");



    // table.append('td').text(datetime);
    // table.append('td').text(city);
    // table.append('td').text(state);
    // table.append('td').text(country);
    // table.append('td').text(shape);
    // table.append('td').text(durationMinutes);
    // table.append('td').text(comments);




});

