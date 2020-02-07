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
  
  var contentString = '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '</div>'+
      '</div>';
  var houseinfo = new google.maps.InfoWindow({
    content: contentString
  });
  var housemark = new google.maps.Marker({
    position: house,
    map: map,
    title: 'My House'
  });
    housemark.addListener('click', function() {
      houseinfo.open(map, housemark);
    });
  
  var churchmark = new google.maps.Marker({
    position: church,
    map: map,
    title: 'My Church'
  });
  var schoolmark = new google.maps.Marker({
    position: school,
    map: map,
    title: 'My High School'
  });
  var mtnmark = new google.maps.Marker({
    position: mtn,
    map: map,
    title: 'Pikes Peak'
  });
  var afamark = new google.maps.Marker({
    position: afa,
    map: map,
    title: 'Air Force Academy'
  });
}
