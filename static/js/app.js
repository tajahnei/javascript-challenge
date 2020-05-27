// from data.js
var tableData = data;

// YOUR CODE HERE!
d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td>
    <td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td> `;
  });

  var tbody = document.querySelector("tbody");
  var dateInput = document.querySelector("#datetime");
  var filterButton = document.querySelector("#filter-btn");
  var resetButton = document.querySelector("#reset-btn");
  
  // Add an event listener to the filterButton, call handleFilterButtonClick when clicked
  filterButton.addEventListener("click", handleFilterButtonClick);
  
  // Add an event listener to the resetButton, call handleResetButtonClick when clicked
  resetButton.addEventListener("click", handleResetButtonClick);
  
  // Create a copy of the data
  var tableData = data;
  
  // Build table with non-filtered data
  function renderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      // Get current address object and fields
      var address = tableData[i];
      console.log(address)
      var fields = Object.keys(address);
      // Create new row in tbody, set index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For each field in address object, create new cell and set inner text to be current value at current address field
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = address[field];
      }
    }
  }
  
  // Build search table for filtered data
  function handleFilterButtonClick() {
    var filterDate = dateInput.value;
    
    // Filter on date
    if (filterDate != "") {
      tableData = data.filter(function (address) {
        var addressDate = address.datetime;
        return addressDate === filterDate;
      });
    }
    else { tableData };
  
    renderTable();
  }
  
  // Clear all the fields
  function handleResetButtonClick(){
    renderTable();
  }
  
  // Render the table for the first time on page load
  renderTable();