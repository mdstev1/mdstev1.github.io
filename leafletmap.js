  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

  L.marker([38.958, -104.771]).addTo(map)
        .bindPopup('<p class="bold capitalize incrfontsize">Church Building</p>Except for some stake reorganizations, this was my stake center for most of my growing up years. Memories of youth activities, campouts, and church ball come to my mind as I remember that building.')

  L.marker([38.949, -104.771]).addTo(map)
        .bindPopup('<p class="bold capitalize incrfontsize">Rampart High School</p>This was my high school. I played basketball and football here, made some very meaningful friendships, and prepared myself for college. I will not say that I loved it, but it recalls some good memories!')

  L.marker([38.839, -105.042]).addTo(map)
        .bindPopup('<p class="bold capitalize incrfontsize">Pikes Peak</p>Pikes Peak overlooks the city of Colorado Springs and is often what people associate the city with. I worked on top at the gift shop one summer and hiked it 3 separate times. It is a beautiful view from both the bottom and the top.')
 
  L.marker([39.010, -104.881]).addTo(map)
        .bindPopup('<p class="bold capitalize incrfontsize">Air Force Academy</p> Since many in our ward were in the Air Force, we would often go onto the Academy to have youth activities. My high school graduation was in the basketball arena.')

  L.marker([38.9446, -104.7874]).addTo(map)
        .bindPopup('<p class="bold capitalize incrfontsize">My House</p> This is the house that I grew up in. We moved here when I was 7 years old, so I lived here for about 11 years before leaving for school, plus a couple summers here and there.')

  var circle = L.circle([38.9446, -104.7874], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 1000
}).addTo(map).bindPopup('<p class="bold capitalize incrfontsize">10 Minute Walk Radius</p>')
    
   var propline = L.polygon([
      [38.9447, -104.7878],
      [38.9444, -104.7878],
      [38.9444, -104.7873],
      [38.9448, -104.7872]
    ]).addTo(map).bindPopup('<p class="bold capitalize incrfontsize">Property Boundaries</p>')

   map.setView([38.925, -104.7874], 12)









/*
function initMap() {
  var house = {lat: 38.945, lng: -104.787};
  var church = {lat: 38.958, lng: -104.771};
  var school = {lat: 38.949, lng: -104.771};
  var mtn = {lat: 38.839, lng: -105.042};
  var afa = {lat: 38.994, lng: -104.858};
  var myLatLng = {lat: 38.93, lng: -104.821};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });
  
  var housestring = '<div id="content">'+
      '<h1>My House</h1>'+
      '<div id="bodyContent">'+
      '<p>This is the house that I grew up in. ' +
      'We moved here when I was 7 years old, so I lived here for about 11 years before leaving for school, plus a couple summers here and there. '+
      '</div>'+
      '</div>';
  var houseinfo = new google.maps.InfoWindow({
    content: housestring
  });
  var housemark = new google.maps.Marker({
    position: house,
    map: map,
    title: 'My House'
  });
    housemark.addListener('click', function() {
      houseinfo.open(map, housemark);
    });
  
  var churchstring = '<div id="content">'+
      '<h1>My Church</h1>' + '</div>'
  var churchinfo = new google.maps.InfoWindow({
    content: churchstring
  });
  var churchmark = new google.maps.Marker({
    position: church,
    map: map,
    title: 'My Church'
  });
    churchmark.addListener('click', function() {
      churchinfo.open(map, churchmark);
    });
  
  var schoolinfo = new google.maps.InfoWindow({
    content: schoolstring
  });
  var schoolmark = new google.maps.Marker({
    position: school,
    map: map,
    title: 'My High School'
  });
    schoolmark.addListener('click', function() {
      schoolinfo.open(map, schoolmark);
    });
  
  var mtninfo = new google.maps.InfoWindow({
    content: mtnstring
  });
  var mtnmark = new google.maps.Marker({
    position: mtn,
    map: map,
    title: 'Pikes Peak'
  });
    mtnmark.addListener('click', function() {
      mtninfo.open(map, mtnmark);
    });
  
  var afainfo = new google.maps.InfoWindow({
    content: afastring
  });
  var afamark = new google.maps.Marker({
    position: afa,
    map: map,
    title: 'Air Force Academy'
  });
    afamark.addListener('click', function() {
      afainfo.open(map, afamark);
    });
}
*/
