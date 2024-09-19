function addRow() {
    var table = document.getElementById("packageTable");
    var row = table.insertRow(-1);
    var destination = document.getElementById("destination").value;
    var packageType = document.getElementById("packageType").value;
    var numDays = document.getElementById("numDays").value;
    var numPeople = document.getElementById("numPeople").value;
    var priceRange = document.getElementById("priceRange").value;
  
    // Check for empty fields
    if (destination === "" || packageType === "" || numDays === "" || numPeople === "" || priceRange === "") {
      if (destination === "") {
        document.getElementById("destination").style.border = "1px solid red";
      } else {
        document.getElementById("destination").style.border = "";
      }
      if (packageType === "") {
        document.getElementById("packageType").style.border = "1px solid red";
      } else {
        document.getElementById("packageType").style.border = "";
      }
      if (numDays === "") {
        document.getElementById("numDays").style.border = "1px solid red";
      } else {
        document.getElementById("numDays").style.border = "";
      }
      if (numPeople === "") {
        document.getElementById("numPeople").style.border = "1px solid red";
      } else {
        document.getElementById("numPeople").style.border = "";
      }
      if (priceRange === "") {
        document.getElementById("priceRange").style.border = "1px solid red";
      } else {
        document.getElementById("priceRange").style.border = "";
      }
      return;
    } else {
      // Return the red error border to normal
      document.getElementById("destination").style.border = "";
      document.getElementById("packageType").style.border = "";
      document.getElementById("numDays").style.border = "";
      document.getElementById("numPeople").style.border = "";
      document.getElementById("priceRange").style.border = "";
    }
  
    // Check if numDays and numPeople are positive numbers
    if (numDays < 0 ) {
      document.getElementById("numDays").style.border = "1px solid red";
      return;
    } else {
      document.getElementById("numDays").style.border = "";
    }
  
    if ( numPeople < 0) {
      document.getElementById("numPeople").style.border = "1px solid red";
      return;
    } else {
      document.getElementById("numPeople").style.border = "";
    }
  
    // Validate destination input
    if (!/^[a-zA-Z]+$/.test(destination)) {
      document.getElementById("destination").style.border = "1px solid red";
      return;
    } else {
      document.getElementById("destination").style.border = "";
    }
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
  
    cell1.innerHTML = destination;
    cell2.innerHTML = packageType;
    cell3.innerHTML = numDays;
    cell4.innerHTML = numPeople;
    cell5.innerHTML = priceRange;
    cell6.innerHTML = "<button type='button' onclick='deleteRow(this.parentNode.parentNode.rowIndex)'>Delete</button>";
  
    // Clear input fields
    document.getElementById("destination").value = "";
    document.getElementById("packageType").value = "";
    document.getElementById("numDays").value = "";
    document.getElementById("numPeople").value = "";
  document.getElementById("priceRange").value = "";
          // Reset error borders
          document.getElementById("destination").style.border = "";
          document.getElementById("packageType").style.border = "";
          document.getElementById("numDays").style.border = "";
          document.getElementById("numPeople").style.border = "";
          document.getElementById("priceRange").style.border = "";
          
      }
  function deleteRow(index) 
  {
      document.getElementById("packageTable").deleteRow(index);
  }