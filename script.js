let totalMinutes = 0;

function addActivity() {
  let activity = document.getElementById("activity").value;
  let duration = parseInt(document.getElementById("duration").value);

  if (activity === "" || isNaN(duration) || duration <= 0) {
    alert("Please enter valid activity and minutes!");
    return;
  }

  let table = document.getElementById("activityTable");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = activity;
  cell2.innerHTML = duration;

  totalMinutes += duration;
  document.getElementById("totalTime").innerText = "Total Time: " + totalMinutes + " mins";

  document.getElementById("activity").value = "";
  document.getElementById("duration").value = "";
}