
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


    //Infowindow text Yemen

        function marker1_popup(level){
            if (level=="level1") {
                var contentString_yemen = '<div id="div-main-infoWindow">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">LOCKED</h1>'+
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
            return infowindow_yemen
            }

    //Infowindow text sudan

        function marker2_popup(level){
            if (level=="level1") {
                var contentString_sudan = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">LOCKED</h1>'+
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

    //Infowindow text Somalia

        function marker3_popup(level){

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
/*                google.maps.event.addListener(infowindow_somalia, 'domready', function () {
                $('#div-main-infoWindow').closest('.gm-style-iw').parent().addClass('custom-iw');
                });*/

            return infowindow_somalia
                }

        function marker4_popup(level){
            if (level=="level1") {
                var contentString_syria = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">LOCKED</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>You do not have enough points to access this story. Keep exploring, unlock badges and gain access! </b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
                var infowindow_syria = new google.maps.InfoWindow({
                  content: contentString_syria,
                });
                }
            else{
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

                }
            return infowindow_syria
                }

//Infowindow text Zimbabwe

    function marker5_popup(level){
            if (level=="level1" || level=="level2") {
                var contentString_zimbabwe = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">LOCKED</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>You do not have enough points to access this story. Keep exploring, unlock badges and gain access! </b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
                var infowindow_zimbabwe = new google.maps.InfoWindow({
                  content: contentString_zimbabwe,
                });
                }
            else{
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

                }
            return infowindow_zimbabwe
                }

    //Infowindow text Nairobi
    function marker6_popup(level){
            if (level=="level1" || level=="level2") {
                var contentString_nairobi = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">LOCKED</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>You do not have enough points to access this story. Keep exploring, unlock badges and gain access! </b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
                var infowindow_nairobi = new google.maps.InfoWindow({
                  content: contentString_nairobi,
                });
                }
            else{
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

                }
            return infowindow_nairobi
                }

    //Infowindow text Mumbai
    function marker7_popup(level){

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

            return infowindow_mumbai
                }

    //Infowindow text Denpasar
    function marker8_popup(level){

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


            return infowindow_denpasar
                }

    //Infowindow text Dehli
    function marker9_popup(level){

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


            return infowindow_dehli
                }


    //Infowindow text New Jersey
    function marker10_popup(level){
            if (level=="level1") {
                var contentString_newjersey = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">LOCKED</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>You do not have enough points to access this story. Keep exploring, unlock badges and gain access! </b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
                var infowindow_newjersey = new google.maps.InfoWindow({
                    content: contentString_newjersey,
                    });
                }
            else{
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
                var infowindow_newjersey = new google.maps.InfoWindow({
                    content: contentString_newjersey,
                    });

                }
            return infowindow_newjersey
                }

    //Infowindow text Cape Town
    function marker11_popup(level){

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


            return infowindow_capetown
                }

      //assign infowindow so can be called later
      infowindow_yemen = marker1_popup(level);
      infowindow_sudan = marker2_popup(level);
      infowindow_somalia = marker3_popup(level);
      infowindow_syria = marker4_popup(level);
      infowindow_zimbabwe = marker5_popup(level);
      infowindow_nairobi = marker6_popup(level);
      infowindow_mumbai = marker7_popup(level);
      infowindow_denpasar = marker8_popup(level);
      infowindow_dehli = marker9_popup(level);
      infowindow_newjersey = marker10_popup(level);
      infowindow_capetown = marker11_popup(level);

     //variable to set marker as lock
    var lock = {
        url: 'https://dl.dropboxusercontent.com/s/gk80q3yrwebdg7t/padlock.png?dl=0',
        scaledSize: new google.maps.Size(30, 30), // scaled size
     }

    function marker1(level){

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

    function marker2(level){

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

    function marker3(level){

          if (level=="level1"){
                return circlerefugees
            }
          else if (level=="level2"){
                return circlerefugees
            }
          else if (level=="level3"){
                return circlerefugees
            }

        }
    function marker4(level){

          if (level=="level1"){
                return lock
            }
          else if (level=="level2"){
                return circlerefugees
            }
          else if (level=="level3"){
                return circlerefugees
            }

        }
    function marker5(level){

          if (level=="level1"){
                return lock
            }
          else if (level=="level2"){
                return lock
            }
          else if (level=="level3"){
                return circlerefugees
            }

        }

    function marker6(level){

          if (level=="level1"){
                return lock
            }
          else if (level=="level2"){
                return lock
            }
          else if (level=="level3"){
                return circleenvironment
            }

        }

    function marker7(level){

          if (level=="level1"){
                return circleenvironment
            }
          else if (level=="level2"){
                return circleenvironment
            }
          else if (level=="level3"){
                return circleenvironment
            }

        }

    function marker8(level){

          if (level=="level1"){
                return circleenvironment
            }
          else if (level=="level2"){
                return circleenvironment
            }
          else if (level=="level3"){
                return circleenvironment
            }

        }

    function marker9(level){

          if (level=="level1"){
                return circleinequality
            }
          else if (level=="level2"){
                return circleinequality
            }
          else if (level=="level3"){
                return circleinequality
            }

        }

    function marker10(level){

          if (level=="level1"){
                return lock
            }
          else if (level=="level2"){
                return circleinequality
            }
          else if (level=="level3"){
                return circleinequality
            }

        }

    function marker11(level){

          if (level=="level1"){
                return circleinequality
            }
          else if (level=="level2"){
                return circleinequality
            }
          else if (level=="level3"){
                return circleinequality
            }

        }



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


    var marker1 = new google.maps.Marker({
          position: yemen,
          icon: marker1(level),
          map: map,
          title: 'Yemen'
        });

        marker1.addListener('mouseover', function() {
          infowindow_yemen.open(map, marker1);
        });
        marker1.addListener('mouseout', function() {
          infowindow_yemen.close(map, marker1);
        });



     //Sudan
    var marker2 = new google.maps.Marker({
          position: sudan,
          icon: marker2(level),
          map: map,
          title: 'South Sudan'
        });

        marker2.addListener('mouseover', function() {
          infowindow_sudan.open(map, marker2);
        });
        marker2.addListener('mouseout', function() {
          infowindow_sudan.close(map, marker2);
        });

     //Somalia
        var marker3 = new google.maps.Marker({
          position: somalia,
          icon: marker3(level),
          map: map,
          title: 'Somalia'
        });
//        marker3.addListener('click', function() {
//          infowindow_somalia.open(map, marker3);
//        });

        google.maps.event.addListener(marker3, 'mouseover', function () {
        infowindow_somalia.open(map, marker3);
         });
        google.maps.event.addListener(marker3, 'mouseout', function () {
        infowindow_somalia.close(map, marker3);
         });

    //Syria
        var marker4 = new google.maps.Marker({
          position: syria,
          icon: marker4(level),
          map: map,
          title: 'Syria'
        });
        marker4.addListener('mouseover', function() {
          infowindow_syria.open(map, marker4);
        });
        marker4.addListener('mouseout', function() {
          infowindow_syria.close(map, marker4);
        });

    //Zimbabwe
        var marker5 = new google.maps.Marker({
          position: zimbabwe,
          icon: marker5(level),
          map: map,
          title: 'Zimbabwe'
        });
        marker5.addListener('mouseover', function() {
          infowindow_zimbabwe.open(map, marker5);
        });
        marker5.addListener('mouseout', function() {
          infowindow_zimbabwe.close(map, marker5);
        });

    //Nairobi
        var marker6 = new google.maps.Marker({
          position: nairobi,
          icon: marker6(level),
          map: map,
          title: 'Nairobi'
        });
        marker6.addListener('mouseover', function() {
          infowindow_nairobi.open(map, marker6);
        });
        marker6.addListener('mouseout', function() {
          infowindow_nairobi.close(map, marker6);
        });

    //Mumbai
        var marker7 = new google.maps.Marker({
          position: mumbai,
          icon: marker7(level),
          map: map,
          title: 'Mumbai'
        });
        marker7.addListener('mouseover', function() {
          infowindow_mumbai.open(map, marker7);
        });
        marker7.addListener('mouseout', function() {
          infowindow_mumbai.close(map, marker7);
        });

    //Denpasar
        var marker8 = new google.maps.Marker({
          position: denpasar,
          icon: marker8(level),
          map: map,
          title: 'Denpasar'
        });
        marker8.addListener('mouseover', function() {
          infowindow_denpasar.open(map, marker8);
        });
        marker8.addListener('mouseout', function() {
          infowindow_denpasar.close(map, marker8);
        });

    //Dehli
        var marker9 = new google.maps.Marker({
          position: dehli,
          icon: marker9(level),
          map: map,
          title: 'Dehli'
        });
        marker9.addListener('mouseover', function() {
          infowindow_dehli.open(map, marker9);
        });
        marker9.addListener('mouseout', function() {
          infowindow_dehli.close(map, marker9);
        });

    //New Jersey
        var marker10 = new google.maps.Marker({
          position: newjersey,
          icon: marker10(level),
          map: map,
          title: 'New Jersey'
        });
        marker10.addListener('mouseover', function() {
          infowindow_newjersey.open(map, marker10);
        });
        marker10.addListener('mouseout', function() {
          infowindow_newjersey.close(map, marker10);
        });

    //Cape Town
        var marker11 = new google.maps.Marker({
          position: capetown,
          icon: marker11(level),
          map: map,
          title: 'Cape Town'
        });
        marker11.addListener('mouseover', function() {
          infowindow_capetown.open(map, marker11);
        });
        marker11.addListener('mouseout', function() {
          infowindow_capetown.close(map, marker11);
        });
}