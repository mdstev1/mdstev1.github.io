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

        map.setView([38.925, -104.90], 11)
