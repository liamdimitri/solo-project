import { render } from "react-dom";
import React from "react";
import App from "./components/App.jsx";
import "./styles/index.css";

let myMap = L.map("map").setView([34.18, -118.439], 10);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '<a href="https://www.openstreetmap.org/copyright"></a><a href="https://carto.com/attributions"></a>',
    // Attribution is obligatory as per copyright!
	maxZoom: 20
}).addTo(myMap);

let mariscoselbarracuda = L.marker([34.197, -118.588]).addTo(myMap);
let bigartstacos = L.marker([34.257, -118.446]).addTo(myMap);
let asaderochikali = L.marker([34.023, -118.156]).addTo(myMap);
let leostacotruck = L.marker([34.046, -118.345]).addTo(myMap);
let sanmarcos = L.marker([34.236, -118.485]).addTo(myMap);

mariscoselbarracuda.bindPopup("<b>Mariscos el Barracuda</b><br>7008 De Soto Ave, Canoga Park<br> 10AM - 5PM (Saturday-Monday)<br><a href='http://www.instagram.com/mariscoselbarracuda'>Instagram</a>");
bigartstacos.bindPopup("<b>Big Art's Tacos</b><br>15305 Devonshire Ave, Mission Hills<br> 6PM - 10PM (Wednesday-Sunday)<br><a href='http://www.instagram.com/bigartstacos'>Instagram</a>");
asaderochikali.bindPopup("<b>Asadero Chikali</b><br>1321 S Atlantic Blvd, East LA<br> 9AM - 9:30PM (Wednesday-Sunday)<br><a href='http://www.instagram.com/asaderochikali'>Instagram</a>");
leostacotruck.bindPopup("<b>Leo's Tacos Truck</b><br>1515 S La Brea Ave, Los Angeles<br> 2PM - 12AM (Thursday-Saturday)<br><a href='http://www.instagram.com/leostacostruck'>Instagram</a>");
sanmarcos.bindPopup("<b>Birrieria San Marcos</b><br>8660 Woodley Ave, North Hills<br> 9AM - 10PM <br><a href='http://www.birrieriasanmarcos.com'>Website</a>");

bigartstacos.addEventListener("click", function(){ document.getElementById("feedback").style.display = "block"; });

sanmarcos.addEventListener("click", function(){ document.getElementById("feedback1").style.display = "block"; });


render(<App />, document.getElementById("root"));

