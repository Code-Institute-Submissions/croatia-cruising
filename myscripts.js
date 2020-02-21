 function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 43.5433071,
                    lng: 16.7497627
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 43.5159788,
                lng: 16.4139783
            }, {
                lat: 43.1735682,
                lng: 16.3687375
            }, {
                 lat: 42.7459807,
                lng: 17.4655214
            }, {
                 lat: 42.6457559,
                lng: 18.0764948
            }, {
                 lat: 43.0393846,
                lng: 16.1268793
            }, {
                lat: 43.3076998,
                lng: 16.9989641
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }