// Home page table, found item form, greeting and logo features.

var items = [
  {name: "Black wallet", place: "Library", date: "12 Nov"},
  {name: "Student ID card", place: "Cafeteria", date: "13 Nov"},
  {name: "AirPods case", place: "Classroom H2-7", date: "14 Nov"},
  {name: "Car keys", place: "Parking Area", date: "15 Nov"},
  {name: "USB flash drive", place: "Computer Lab", date: "16 Nov"}
];

function showItems() {
  var body = document.getElementById("itemsBody");
  body.innerHTML = "";

  for (var i = 0; i < items.length; i++) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var placeCell = document.createElement("td");
    var dateCell = document.createElement("td");

    nameCell.textContent = items[i].name;
    placeCell.textContent = items[i].place;
    dateCell.textContent = items[i].date;

    row.appendChild(nameCell);
    row.appendChild(placeCell);
    row.appendChild(dateCell);
    body.appendChild(row);
  }
}

showItems();
