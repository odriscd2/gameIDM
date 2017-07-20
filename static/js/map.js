
function initMap() {
          //Humanitarian crisis
        var yemen = {lat: 15.35472, lng: 44.20667};
        var sudan = {lat: 9.53342, lng: 31.66049};
        var somalia = {lat: 1.71594, lng: 44.77166};
          //Refugees
        var syria = {lat: 36.20124, lng: 37.16117};
        var zimbabwe = {lat: -19.45, lng: 29.81667};
          //Environment
        var nairobi = {lat: -1.28333, lng: 36.81667};
        var mumbai = {lat: 19.07283, lng: 72.88261};
        var denpasar = {lat: -8.650000, lng: 115.216667};
          //Inequality
        var dehli = {lat: 28.65381, lng:  77.22897};
        var newjersey = {lat: 39.833851, lng: 	-74.871826};
        var capetown = {lat: -33.92584, lng: 18.42322};


        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: yemen,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#616161'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#3a3a3a'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},

            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#84E0B7'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#FFC300'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#3a3a3a'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

//begin gamification add on code
       var lock = '..static/images/padlock.png';
       function marker1 (level){
      //Marker style humanitarian crisis
            var circlehumcrisis = {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: 'orange',
              fillOpacity: 0.4,
              scale: 10,
              strokeColor: 'orange',
              strokeWeight: 14,
              strokeOpacity: 0.4,
            };
            //marker style locked ****
           var lock = '..static/images/padlock.png';

            if (level=="level1"){
                return lock
            }
            else if (level=="level2"){
                return circlehumcrisis
            }
            else if (level=="level3"){
                return circlehumcrisis
            }

        }

        function marker2 (level){
              return "level1"
        }

        function marker1_popup(level){
            if (level=="level1") {
                var contentString_yemen = '<div id="div-main-infoWindow">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Yemen</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>You do not have enough points to access this story. Keep exploring, unlock badges and gain access! </b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';

                var infowindow_yemen = new google.maps.InfoWindow({
                  content: contentString_yemen,
                });
                }
            else {
                var contentString_yemen = '<div id="div-main-infoWindow">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Yemen</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Yemen</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';

               var infowindow_yemen = new google.maps.InfoWindow({
                  content: contentString_yemen,
                });
                }
            }

        function marker2_popup(level){
            if (level=="level1") {
                var contentString_sudan = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">South Sudan</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>You do not have enough points to access this story. Keep exploring, unlock badges and gain access! </b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
                  var infowindow_sudan = new google.maps.InfoWindow({
                  content: contentString_sudan,
                });
                }
              else{
                var contentString_sudan = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">South Sudan</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>South Sudan</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';

                var infowindow_sudan = new google.maps.InfoWindow({
                  content: contentString_sudan,
                });

                }
            return infowindow_sudan
                }

      infowindow_sudan = marker2_popup(level);

      //end gamification add on code

      //Infowindow text Yemen
        var contentString_yemen = '<div id="div-main-infoWindow">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Yemen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Yemen</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';

           var infowindow_yemen = new google.maps.InfoWindow({
              content: contentString_yemen,
            });


    //Infowindow text Somalia
        var contentString_somalia = '<div id="div-main-infoWindow">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Somalia</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Somalia</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_somalia = new google.maps.InfoWindow({
          content: contentString_somalia,
          maxWidth: 291
        });
      google.maps.event.addListener(infowindow_somalia, 'domready', function () {
        $('#div-main-infoWindow').closest('.gm-style-iw').parent().addClass('custom-iw');
      });
    //Infowindow text Syria
        var contentString_syria = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Syria</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Syria</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_syria = new google.maps.InfoWindow({
          content: contentString_syria,
        });

    //Infowindow text Zimbabwe
        var contentString_zimbabwe = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Zimbabwe</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Zimbabwe</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_zimbabwe = new google.maps.InfoWindow({
          content: contentString_zimbabwe,
        });

    //Infowindow text Nairobi
        var contentString_nairobi = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Nairobi</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Nairobi</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_nairobi = new google.maps.InfoWindow({
          content: contentString_nairobi,
        });
    //Infowindow text Mumbai
        var contentString_mumbai = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Mumbai</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Mumbai</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_mumbai = new google.maps.InfoWindow({
          content: contentString_mumbai,
        });

    //Infowindow text Denpasar
        var contentString_denpasar = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Denpasar</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Denpasar</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_denpasar = new google.maps.InfoWindow({
          content: contentString_denpasar,
        });

    //Infowindow text Dehli
        var contentString_dehli = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Dehli</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Dehli</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_dehli = new google.maps.InfoWindow({
          content: contentString_dehli,
        });

    //Infowindow text New Jersey
        var contentString_newjersey = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">New Jersey</h1>'+
            '<div id="bodyContent">'+
            '<p><b>New Jersey</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_newjesrsey = new google.maps.InfoWindow({
          content: contentString_newjersey,
        });
    //Infowindow text Cape Town
        var contentString_capetown = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Cape Town</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Cape Town</b>, '+
            ''+
            '</p>'+
            '<p>'+
            '</div>'+
            '</div>';
      var infowindow_capetown = new google.maps.InfoWindow({
          content: contentString_capetown,
        });

    //Marker style humanitarian crisis
        var circlehumcrisis = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'orange',
          fillOpacity: 0.4,
          scale: 10,
          strokeColor: 'orange',
          strokeWeight: 14,
          strokeOpacity: 0.4,
        };

    //Marker style refugees
        var circlerefugees = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'red',
          fillOpacity: 0.4,
          scale: 10,
          strokeColor: 'red',
          strokeWeight: 14,
          strokeOpacity: 0.4,
        };

    //Marker style environment
        var circleenvironment = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'green',
          fillOpacity: 0.4,
          scale: 10,
          strokeColor: 'green',
          strokeWeight: 14,
          strokeOpacity: 0.4,
        };

    //Marker style inequality
        var circleinequality = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'magenta',
          fillOpacity: 0.4,
          scale: 10,
          strokeColor: 'magenta',
          strokeWeight: 14,
          strokeOpacity: 0.4,
        };

    //Yemen
    var marker1 = new google.maps.Marker({
          position: yemen,
          icon: marker1(level),
          map: map,
          title: 'Yemen'
        });

        marker1.addListener('click', function() {
          infowindow_yemen.open(marker1);
        });



     //Sudan
       var marker2 = new google.maps.Marker({
          position: sudan,
          icon: circlehumcrisis,
          map: map,
          title: 'South Sudan'
        });
        marker2.addListener('click', function() {
          infowindow_sudan.open(map, marker2);
        });
     //Somalia
        var marker3 = new google.maps.Marker({
          position: somalia,
          icon: circlehumcrisis,
          map: map,
          title: 'Somalia'
        });
//        marker3.addListener('click', function() {
//          infowindow_somalia.open(map, marker3);
//        });

           google.maps.event.addListener(marker3, 'click', function () {
        infowindow_somalia.open(map, marker3);
    });
    //Syria
        var marker4 = new google.maps.Marker({
          position: syria,
          icon: circlerefugees,
          map: map,
          title: 'Syria'
        });
        marker4.addListener('click', function() {
          infowindow_syria.open(map, marker4);
        });

    //Zimbabwe
        var marker5 = new google.maps.Marker({
          position: zimbabwe,
          icon: circlerefugees,
          map: map,
          title: 'Zimbabwe'
        });
        marker5.addListener('click', function() {
          infowindow_zimbabwe.open(map, marker5);
        });

    //Nairobi
        var marker6 = new google.maps.Marker({
          position: nairobi,
          icon: circleenvironment,
          map: map,
          title: 'Nairobi'
        });
        marker6.addListener('click', function() {
          infowindow_nairobi.open(map, marker6);
        });

    //Mumbai
        var marker7 = new google.maps.Marker({
          position: mumbai,
          icon: circleenvironment,
          map: map,
          title: 'Mumbai'
        });
        marker7.addListener('click', function() {
          infowindow_mumbai.open(map, marker7);
        });

    //Denpasar
        var marker8 = new google.maps.Marker({
          position: denpasar,
          icon: circleenvironment,
          map: map,
          title: 'Denpasar'
        });
        marker8.addListener('click', function() {
          infowindow_denpasar.open(map, marker8);
        });

    //Dehli
        var marker9 = new google.maps.Marker({
          position: dehli,
          icon: circleinequality,
          map: map,
          title: 'Dehli'
        });
        marker9.addListener('click', function() {
          infowindow_dehli.open(map, marker9);
        });

    //New Jersey
        var marker10 = new google.maps.Marker({
          position: newjersey,
          icon: circleinequality,
          map: map,
          title: 'New Jersey'
        });
        marker10.addListener('click', function() {
          infowindow_newjesrsey.open(map, marker10);
        });

    //Cape Town
        var marker11 = new google.maps.Marker({
          position: capetown,
          icon: circleinequality,
          map: map,
          title: 'Cape Town'
        });
        marker11.addListener('click', function() {
          infowindow_capetown.open(map, marker11);
        });

}
/*

function unlock (badges, points){
      //Marker style humanitarian crisis
        var circlehumcrisis = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'orange',
          fillOpacity: 0.4,
          scale: 10,
          strokeColor: 'orange',
          strokeWeight: 14,
          strokeOpacity: 0.4,
        };
    //marker style locked ****
       var lock = 'images/padlock.png';

    if (points<300){
        return "level1"
    }
    else if (points>=300 && points<700){
        return "level2"
    }
    else if (points>=700){
        return "level3"
    }


}
*/