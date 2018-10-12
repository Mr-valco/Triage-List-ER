/* const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

 */

var app = new function () {

  //the element and array var
  this.el = document.getElementById('patientList');
  this.patientList = ['Paul', 'Jam', 'Try', 'Mariam'];

  //this counts the number of patients in array and shows no patients if none are entered
  this.Count = function (data) {
    //counter from html
    var el = document.getElementById('counter');
    //a holder var
    var name = 'patient';
    //if there are patients
    if (data) {
      //more than 1 patient
      if (data > 1) {
        //show the contents of the array
        name = 'patientList';
      }
      //show nr of patients
      el.innerHTML = data + ' ' + name;
    } else {
      //show no patients
      el.innerHTML = 'No ' + name;
    }
  };

  //this function displays the number of patientList and shows a button next to them to edit or delete
  this.FetchAll = function () {
    //contents var
    var data = '';
    //if array greater than 0
    if (this.patientList.length > 0) {
      //for the length of the array
      for (i = 0; i < this.patientList.length; i++) {
        //display patient name with a button next to it to edit or delete in a table format
        data += '<tr>';
        data += '<td>' + this.patientList[i] + '</td>';
        data += '<td><button class="btn btn-warning" onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button class="btn btn-danger" onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    //count the patients
    this.Count(this.patientList.length);
    return this.el.innerHTML = data;
  };

  //Adding patientList function
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var patient = el.value;
    if (patient) {
      // Add the new value
      this.patientList.push(patient.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };


  //editing name function
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.patientList[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function () {
      // Get value
      var patient = el.value;
      if (patient) {
        // Edit value
        self.patientList.splice(item, 1, patient.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  //Delete patient from array funtion
  this.Delete = function (item) {
    // Delete the current row
    this.patientList.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

}

//Call the app funtion to run
app.FetchAll();

//This funtion hides the edit property after the name was edited or button clicked
//css property
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}