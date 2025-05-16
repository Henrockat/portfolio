// Kaart van Henok Metal Art workshoplocatie

let map = L.map('apMap').setView([51.251955, 4.420707], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Optionele rechthoek rond je atelier (ruwe schatting — pas aan indien nodig)
let bounds = [[51.2515, 4.4199], [51.2523, 4.4214]];
L.rectangle(bounds, { color: "#e60005", weight: 2 }).addTo(map);

// Marker op jouw locatie
let workshopMarker = L.marker([51.251955, 4.420707]).addTo(map);
workshopMarker.bindPopup("<b>Henok Metal Art</b><br>Workshoplocatie – Merksem").openPopup();
