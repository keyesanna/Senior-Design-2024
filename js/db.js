import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, serverTimestamp, addDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnPs3yl25E-0aQ_5lzW-cAbha8Jlm-gnE",
    authDomain: "glucose-monitor-aea24.firebaseapp.com",
    projectId: "glucose-monitor-aea24",
    storageBucket: "glucose-monitor-aea24.appspot.com",
    messagingSenderId: "37818120976",
    appId: "1:37818120976:web:304d002000ebf8ce148395",
    measurementId: "G-DEVX37EK4C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for populating and sorting array used to create 
const readArr = [];
function renderList(doc){
  var glucose = doc.data().glucose*1; //readings were not sensitive enough to produce calibration curve. *1 takes the place of that equation.
  var time = doc.data().time.toDate();

  document.getElementById("number").innerHTML = glucose;
  readArr.push({x: time, y: glucose});
}

//getting data from db
const querySnapshot = await getDocs(collection(db, "readings"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  renderList(doc);
});

readArr.sort();
console.log(readArr);

//saving data to db
const form = document.querySelector("#add-reading");
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const docRef = addDoc(collection(db, "readings"),
  {glucose: form.name.value, time: serverTimestamp()})
});

//creating chart
new Chart("indexChart", {
  type: "scatter",
  data: {datasets: [{pointRadius: 4, pointBackgroundColor: "rgba(232, 47, 53, 1)", data: readArr}]},
  options: {legend: {display: false}}
});