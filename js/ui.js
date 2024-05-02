//event listener -> sidenav in header
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {edge: 'right'});
});

//event listener -> dropdowns for charts on 'history' page
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems, {accordion: false});
});


//dataset for indexChart on 'index' page
const xyValues = [
  {x:1714287551, y:70},
  {x:1714287582, y:87},
  {x:1714287551, y:89},
  {x:1714287592, y:98},
  {x:1714287601, y:99},
  {x:1714287609, y:99},
  {x:1714287617, y:100},
  {x:1714287624, y:110},
  {x:1714287632, y:140},
  {x:1714287639, y:140},
  {x:1714287646, y:150}
];  


//generates indexChart on 'index' page using indexVals dataset
//new Chart("indexChart", {
  //type: "scatter",
  //data: {datasets: [{pointRadius: 4, pointBackgroundColor: "rgba(232, 47, 53, 1)", data: xyValues}]},
  //options: {legend: {display: false}}
//});

//generates dayChart on 'history' page using dayVals dataset
new Chart("dayChart", {
  type: "line",
  data: xyValues,
  options: {legend: {display: false}}
});

//generates weekChart on 'history' page using weekVals dataset
new Chart("weekChart", {
  type: "line",
  data: {datasets: [{data: xyValues}]},
  options: {legend: {display: false}}
});

//generates monthChart on 'history page using monthVals dataset
new Chart("monthChart", {
  type: "line",
  data: {datasets: [{data: xyValues}]},
  options: {legend: {display: false}}
});