var map = L.map('map').setView([38.925, -104.90], 3);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


var wmsLayer = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-c1f80959149746db8eb3a99b5da79ec8/wms?', {
  layers: 'Polygons,Points',
  format: 'image/png',
  transparent: true
}).addTo(map);
