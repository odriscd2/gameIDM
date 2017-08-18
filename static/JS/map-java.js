   // This example displays a marker at the center of Australia.
        // When the user clicks the marker, an info window opens.
        function initMap() {
            //Humanitarian crisis
            var swatvalley = {
                lat: 35.4920
                , lng: 72.5205
            };
            var losangeles = {
                lat: 34.0439
                , lng: -118.2424
            };
            var ottawa = {
                lat: 47.4215
                , lng: -75.6972
            };

            var redwoodcity = {
                lat: 37.4852
                , lng: -122.2364
            };
            var newhampshire = {
                lat: 43.1939
                , lng: -71.5724
            };
            //Environment
            var nairobi = {
                lat: -1.28333
                , lng: 36.81667
            };

         var colorado = {
                lat: 38.83388
                , lng: -104.82136
            };
            var mumbai = {
                lat: 19.0760
                , lng: 72.8777
            };
            var bali = {
                lat: -8.650000
                , lng: 115.216667
            };

            var dehli = {
                lat: 39.7392
                , lng: -104.9903
            };
//Social Inequality
            var newjersey = {
                lat: 38.7986
                , lng: -74.2391
            };
            var Campo = {
                lat: 32.6076
                , lng: -116.4697
            };
            var rajasthan = {
                lat: 27.0238
                , lng: 74.2179
            };
            var southdakota = {
                lat: 47.7563
                , lng: -101.2004
            };

//refugees
            var berlin = {
                lat: 52.5200
                , lng: 13.4050
            };
            var daraa = {
                lat: 32.6264
                , lng: 36.1035
            };
            var somalia = {
                lat: 5.1521
                , lng: 46.1996
            };
            var mosney = {
                lat: 53.6604
                , lng: -6.2409
            };




            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 2
                , minZoom: 2
                , maxZoom: 2
                , draggable: false
                , disableDefaultUI: true
                , center: {
                    lat: 36
                    , lng: 0
                }
                , styles: [
                    {
                        elementType: 'geometry'
                        , stylers: [{
                            color: '#ebe3cd'
                        }]
                    }
                    , {
                        elementType: 'labels.text.stroke'
                        , stylers: [{
                             "visibility": "off"
                        }]
                    }
                    , {
                        elementType: 'labels.text.fill'
                        , stylers: [{
                            "visibility": "off"
                        }
                    ]
                    },

                    {
                        featureType: 'administrative.locality'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
                            "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'poi'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
                            "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'poi.park'
                        , elementType: 'geometry'
                        , stylers: [{
                            color: '#263c3f'
                        }]
            }
                    , {
                        featureType: 'poi.park'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
                            "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'road'
                        , elementType: 'geometry'
                        , stylers: [{
                            color: '#38414e'
                        }]
            }
                    , {
                        featureType: 'road'
                        , elementType: 'geometry.stroke'
                        , stylers: [{
                            color: '#212a37'
                        }]
            }
                    , {
                        featureType: 'road'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
                            "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'road.highway'
                        , elementType: 'geometry'
                        , stylers: [{
                            color: '#746855'
                        }]
            }
                    , {
                        featureType: 'road.highway'
                        , elementType: 'geometry.stroke'
                        , stylers: [{
                            color: '#1f2835'
                        }]
            }
                    , {
                        featureType: 'road.highway'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
                             "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'transit'
                        , elementType: 'geometry'
                        , stylers: [{
                            color: '#2f3948'
                        }]
            }
                    , {
                        featureType: 'transit.station'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
                            "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'water'
                        , elementType: 'geometry'
                        , stylers: [{
                            color: '#B7D9E2'
                        }]
            }
                    , {
                        featureType: 'water'
                        , elementType: 'labels.text.fill'
                        , stylers: [{
//                            color: '#515c6d'
//                            , display: 'none'
                            "visibility": "off"
                        }]
            }
                    , {
                        featureType: 'water'
                        , elementType: 'labels.text.stroke'
                        , stylers: [{
                            "visibility": "off"
                        }]
            }
          ]
            });

         //begin gamification add on code


    //Infowindow text Swat Valley

        function marker1_popup(level){
            if (level=="level1") {
                var contentString_swatvalley = '<div id="div-main-infoWindow">'+
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

                var infowindow_swatvalley = new google.maps.InfoWindow({
                  content: contentString_swatvalley,
                });
                }
            else {
                var contentString_swatvalley = '<div id="div-main-infoWindow">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Swat Valley</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Swat Valley</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';

               var infowindow_swatvalley = new google.maps.InfoWindow({
                  content: contentString_swatvalley,
                });
                }
            return infowindow_swatvalley
            }

    //Infowindow text losangeles

        function marker2_popup(level){
            if (level=="level1") {
                var contentString_losangeles = '<div id="content">'+
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
                  var infowindow_losangeles = new google.maps.InfoWindow({
                  content: contentString_losangeles,
                });
                }
            else{
                var contentString_losangeles = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">South Losangeles</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>South Losangeles</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';

                var infowindow_losangeles = new google.maps.InfoWindow({
                  content: contentString_losangeles,
                });

                }
            return infowindow_losangeles
                }

    //Infowindow text Ottawa

        function marker3_popup(level){

                var contentString_ottawa = '<div id="div-main-infoWindow">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Ottawa</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Ottawa</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';

                var infowindow_ottawa = new google.maps.InfoWindow({
                    content: contentString_ottawa,
                    maxWidth: 291
                });
/*                google.maps.event.addListener(infowindow_ottawa, 'domready', function () {
                $('#div-main-infoWindow').closest('.gm-style-iw').parent().addClass('custom-iw');
                });*/

            return infowindow_ottawa
                }

        function marker4_popup(level){
            if (level=="level1") {
                var contentString_redwoodcity = '<div id="content">'+
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
                var infowindow_redwoodcity = new google.maps.InfoWindow({
                  content: contentString_redwoodcity,
                });
                }
            else{
               var contentString_redwoodcity = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Redwoodcity</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Redwoodcity</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
               var infowindow_redwoodcity = new google.maps.InfoWindow({
                  content: contentString_redwoodcity,
                });

                }
            return infowindow_redwoodcity
                }

//Infowindow text Newhampshire

    function marker5_popup(level){
            if (level=="level1" || level=="level2") {
                var contentString_newhampshire = '<div id="content">'+
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
                var infowindow_newhampshire = new google.maps.InfoWindow({
                  content: contentString_newhampshire,
                });
                }
            else{
                var contentString_newhampshire = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Newhampshire</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Newhampshire</b>, '+
                    ''+
                    '</p>'+
                    '<p>'+
                    '</div>'+
                    '</div>';
                var infowindow_newhampshire = new google.maps.InfoWindow({
                content: contentString_newhampshire,
                });

                }
            return infowindow_newhampshire
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

    //Infowindow text Bali
    function marker8_popup(level){

            var contentString_bali = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Bali</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Bali</b>, '+
                ''+
                '</p>'+
                '<p>'+
                '</div>'+
                '</div>';
            var infowindow_bali = new google.maps.InfoWindow({
                content: contentString_bali,
                 });


            return infowindow_bali
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

    //Infowindow text Campo
    function marker11_popup(level){

            var contentString_Campo = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Campo</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Campo</b>, '+
                ''+
                '</p>'+
                '<p>'+
                '</div>'+
                '</div>';
            var infowindow_Campo = new google.maps.InfoWindow({
                content: contentString_Campo,
                });


            return infowindow_Campo
                }

     //colorado info window
    function marker12_popup(level){

            var contentString_colorado = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>Colorado</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_colorado = new google.maps.InfoWindow({
                content: contentString_colorado,
                });


            return infowindow_colorado
                }
    function marker13_popup(level){

            var contentString_rajasthan = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>Rajasthan</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_rajasthan = new google.maps.InfoWindow({
                content: contentString_rajasthan,
                });


            return infowindow_rajasthan
                }

    function marker14_popup(level){

            var contentString_southdakota = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>South Dakota</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_southdakota = new google.maps.InfoWindow({
                content: contentString_southdakota,
                });


            return infowindow_southdakota
                }

    function marker15_popup(level){

            var contentString_berlin = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>Berlin</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_berlin = new google.maps.InfoWindow({
                content: contentString_berlin,
                });


            return infowindow_berlin                }

    function marker16_popup(level){

            var contentString_daraa = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>Daraa</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_daraa = new google.maps.InfoWindow({
                content: contentString_daraa,
                });


            return infowindow_daraa                }

    function marker17_popup(level){

            var contentString_somalia = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>Somalia</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_somalia = new google.maps.InfoWindow({
                content: contentString_somalia,
                });


            return infowindow_somalia                }


    function marker18_popup(level){

            var contentString_mosney = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading"></h1>' +
            '<div id="bodyContent">' +
            '<p><b>Mosney</b> ' +
            '' +
            '</p>' +
            '<p>' +
            '</div>' +
            '</div>';
            var infowindow_mosney = new google.maps.InfoWindow({
                content: contentString_mosney,
                });


            return infowindow_mosney             }




      //assign infowindow so can be called later
      infowindow_swatvalley = marker1_popup(level);
      infowindow_losangeles = marker2_popup(level);
      infowindow_ottawa = marker3_popup(level);
      infowindow_redwoodcity = marker4_popup(level);
      infowindow_newhampshire = marker5_popup(level);
      infowindow_nairobi = marker6_popup(level);
      infowindow_mumbai = marker7_popup(level);
      infowindow_bali = marker8_popup(level);
      infowindow_dehli = marker9_popup(level);
      infowindow_newjersey = marker10_popup(level);
      infowindow_Campo = marker11_popup(level);
      infowindow_colorado = marker12_popup(level);
      infowindow_rajasthan = marker13_popup(level);
      infowindow_southdakota = marker14_popup(level);
      infowindow_berlin=marker15_popup(level);
      infowindow_daraa=marker16_popup(level);
      infowindow_somalia=marker17_popup(level);
      infowindow_mosney=marker18_popup(level);



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
                return circlehumcrisis
            }
          else if (level=="level2"){
                return circlehumcrisis
            }
          else if (level=="level3"){
                return circlehumcrisis
            }

        }
    function marker4(level){

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
    function marker5(level){

          if (level=="level1"){
                return lock
            }
          else if (level=="level2"){
                return lock
            }
          else if (level=="level3"){
                return circlehumcrisis
            }

        }

    function marker6(level){

          if (level=="level1"){
                return circleenvironment
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

   function marker12(level){

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
   function marker13(level){

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

   function marker14(level){

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

   function marker15(level){

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

   function marker16(level){

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

   function marker17(level){

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

   function marker18(level){

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







            //Marker style humanitarian crisis
            var circlehumcrisis = {
                path: google.maps.SymbolPath.CIRCLE
                , fillColor: '#FFFF00'
                , fillOpacity: 0.4
                , scale: 10
                , strokeColor: '#FFFF00'
                , strokeWeight: 14
                , strokeOpacity: 0.4
            , };
            //Marker style refugees
            var circlerefugees = {
                path: google.maps.SymbolPath.CIRCLE
                , fillColor: '#FF0000'
                , fillOpacity: 0.4
                , scale: 10
                , strokeColor: '#FF0000'
                , strokeWeight: 14
                , strokeOpacity: 0.4
            , };
            //Marker style environment
            var circleenvironment = {
                path: google.maps.SymbolPath.CIRCLE
                , fillColor: '#00FF00'
                , fillOpacity: 0.6
                , scale: 10
                , strokeColor: '#00FF00'
                , strokeWeight: 14
                , strokeOpacity: 0.4
            , };
            //Marker style inequality
            var circleinequality = {
                path: google.maps.SymbolPath.CIRCLE
                , fillColor: '#FF00FF  '
                , fillOpacity: 0.4
                , scale: 10
                , strokeColor: '#FF00FF    '
                , strokeWeight: 14
                , strokeOpacity: 0.4
            , };
            //Swat Valley
            var marker1 = new google.maps.Marker({
                position: swatvalley,
             icon: marker1(level)
                , map: map
                , title: 'Swat Valley'
            });
            marker1.addListener('mouseover', function () {
                infowindow_swatvalley.open(map, marker1);
            });
            marker1.addListener('mouseout', function () {
                infowindow_swatvalley.close(map, marker1);
            });
            marker1.addListener('mouseover', function () {
                soundhcrisis.play(map, marker1);
            });
            marker1.addListener('mouseout', function () {
                soundhcrisis.pause(map, marker1);
            });
            new google.maps.event.addListener(marker1, "click", function () {
                window.open('file:///Users/elenaorlova/Google%20%D0%94%D0%B8%D1%81%D0%BA/sa_html_css/Saleem.html');
            });
            //Losangeles
            var marker2 = new google.maps.Marker({
                position: losangeles
                , icon: marker2(level)
                , map: map
                , title: 'South Losangeles'
            });
            marker2.addListener('mouseover', function () {
                infowindow_losangeles.open(map, marker2);
            });
            marker2.addListener('mouseout', function () {
                infowindow_losangeles.close(map, marker2);
            });
            marker2.addListener('mouseover', function () {
                soundhcrisis.play(map, marker2);
            });
            marker2.addListener('mouseout', function () {
                soundhcrisis.pause(map, marker2);
            });
            //Ottawa
            var marker3 = new google.maps.Marker({
                position: ottawa
                , icon: marker3(level)
                , map: map
                , title: 'Ottawa'
            });
            marker3.addListener('mouseover', function () {
                infowindow_ottawa.open(map, marker3);
            });
            marker3.addListener('mouseout', function () {
                infowindow_ottawa.close(map, marker3);
            });
            marker3.addListener('mouseover', function () {
                soundhcrisis.play(map, marker3);
            });
            marker3.addListener('mouseout', function () {
                soundhcrisis.pause(map, marker3);
            });
            //Redwoodcity
            var marker4 = new google.maps.Marker({
                position: redwoodcity,
                   icon: marker4(level)
                , map: map
                , title: 'Redwoodcity'
            });
            marker4.addListener('mouseover', function () {
                infowindow_redwoodcity.open(map, marker4);
            });
            marker4.addListener('mouseout', function () {
                infowindow_redwoodcity.close(map, marker4);
            });
            marker4.addListener('mouseover', function () {
                soundrefugees.play(map, marker4);
            });
            marker4.addListener('mouseout', function () {
                soundrefugees.pause(map, marker4);
            });
            //Newhampshire
            var marker5 = new google.maps.Marker({
                position: newhampshire
                , icon: marker5(level)
                , map: map
                , title: 'Newhampshire'
            });
            marker5.addListener('mouseover', function () {
                infowindow_newhampshire.open(map, marker5);
            });
            marker5.addListener('mouseout', function () {
                infowindow_newhampshire.close(map, marker5);
            });
            marker5.addListener('mouseover', function () {
                soundrefugees.play(map, marker5);
            });
            marker5.addListener('mouseout', function () {
                soundrefugees.pause(map, marker5);
            });
            //Nairobi
            var marker6 = new google.maps.Marker({
                position: nairobi
                , icon: marker6(level)
                , map: map
                , title: 'Nairobi'
            });
            marker6.addListener('mouseover', function () {
                infowindow_nairobi.open(map, marker6);
            });
            marker6.addListener('mouseout', function () {
                infowindow_nairobi.close(map, marker6);
            });
            marker6.addListener('mouseover', function () {
                soundenvironment.play(map, marker6);
            });
            marker6.addListener('mouseout', function () {
                soundenvironment.pause(map, marker6);
            });
          new google.maps.event.addListener(marker6, "click", function () {
                window.location.replace('render_content/luca.html','_self');  });

            //Mumbai
            var marker7 = new google.maps.Marker({
                position: mumbai
                , icon: marker7(level)
                , map: map
                , title: 'Mumbai'
            });
            marker7.addListener('mouseover', function () {
                infowindow_mumbai.open(map, marker7);
            });
            marker7.addListener('mouseout', function () {
                infowindow_mumbai.close(map, marker7);
            });
            marker7.addListener('mouseover', function () {
                soundenvironment.play(map, marker7);
            });
            marker7.addListener('mouseout', function () {
                soundenvironment.pause(map, marker7);
            });
            //Bali
            var marker8 = new google.maps.Marker({
                position: bali
                , icon: marker8(level)
                , map: map
                , title: 'Bali'
            });
            marker8.addListener('mouseover', function () {
                infowindow_bali.open(map, marker8);
            });
            marker8.addListener('mouseout', function () {
                infowindow_bali.close(map, marker8);
            });
            marker8.addListener('mouseover', function () {
                soundenvironment.play(map, marker8);
            });
            marker8.addListener('mouseout', function () {
                soundenvironment.pause(map, marker8);
            });
            //Dehli
            var marker9 = new google.maps.Marker({
                position: dehli
                ,  icon: marker9(level)
                , map: map
                , title: 'Dehli'
            });
            marker9.addListener('mouseover', function () {
                infowindow_dehli.open(map, marker9);
            });
            marker9.addListener('mouseout', function () {
                infowindow_dehli.close(map, marker9);
            });
            marker9.addListener('mouseover', function () {
                soundinequality.play(map, marker9);
            });
            marker9.addListener('mouseout', function () {
                soundinequality.pause(map, marker9);
            });
            //New Jersey
            var marker10 = new google.maps.Marker({
                position: newjersey
                , icon: marker10(level)
                , map: map
                , title: 'New Jersey'
            });
            marker10.addListener('mouseover', function () {
                infowindow_newjersey.open(map, marker10);
            });
            marker10.addListener('mouseout', function () {
                infowindow_newjersey.close(map, marker10);
            });
            marker10.addListener('mouseout', function () {
                infowindow_newjersey.close(map, marker10);
            });
            marker10.addListener('mouseover', function () {
                soundinequality.play(map, marker10);
            });
            marker10.addListener('mouseout', function () {
                soundinequality.pause(map, marker10);
            });
            new google.maps.event.addListener(marker10, "click", function () {
                window.open('file:///Users/elenaorlova/Google%20%D0%94%D0%B8%D1%81%D0%BA/sa_html_css/jInvertScroll/examples/index.htm');
            });
            //Campo
            var marker11 = new google.maps.Marker({
                position: Campo
                , icon: marker11(level)
                , map: map
                , title: 'Campo'
            });
            marker11.addListener('mouseover', function () {
                infowindow_Campo.open(map, marker11);
            });
            marker11.addListener('mouseout', function () {
                infowindow_Campo.close(map, marker11);
            });
            marker11.addListener('mouseover', function () {
                soundinequality.play(map, marker11);
            });
            marker11.addListener('mouseout', function () {
                soundinequality.pause(map, marker11);
            });
                  //Colorado
            var marker12 = new google.maps.Marker({
                position: colorado
                , icon: marker12(level)
                , map: map
                , title: 'Colorado'
            });
            marker12.addListener('mouseover', function () {
                infowindow_colorado.open(map, marker12);
            });
            marker12.addListener('mouseout', function () {
                infowindow_colorado.close(map, marker12);
            });
            marker12.addListener('mouseover', function () {
                soundenvironment.play(map, marker12);
            });
            marker12.addListener('mouseout', function () {
                soundenvironment.pause(map, marker12);
            });
          new google.maps.event.addListener(marker12, "click", function () {
                window.location.replace('render_content/t3xm.html');  });
//Campo
            var marker13 = new google.maps.Marker({
                position: rajasthan
                , icon: marker13(level)
                , map: map
                , title: 'Rajasthan'
            });
            marker13.addListener('mouseover', function () {
                infowindow_rajasthan.open(map, marker13);
            });
            marker13.addListener('mouseout', function () {
                infowindow_rajasthan.close(map, marker13);
            });
            marker13.addListener('mouseover', function () {
                soundinequality.play(map, marker13);
            });
            marker13.addListener('mouseout', function () {
                soundinequality.pause(map, marker13);
            });

//South Dakota
            var marker14 = new google.maps.Marker({
                position: southdakota
                , icon: marker14(level)
                , map: map
                , title: 'South Dakota'
            });
            marker14.addListener('mouseover', function () {
                infowindow_southdakota.open(map, marker14);
            });
            marker14.addListener('mouseout', function () {
                infowindow_southdakota.close(map, marker14);
            });
            marker14.addListener('mouseover', function () {
                soundinequality.play(map, marker14);
            });
            marker14.addListener('mouseout', function () {
                soundinequality.pause(map, marker14);
            });

//Berlin
            var marker15 = new google.maps.Marker({
                position: berlin
                , icon: marker15(level)
                , map: map
                , title: 'Berlin'
            });
            marker15.addListener('mouseover', function () {
                infowindow_berlin.open(map, marker15);
            });
            marker15.addListener('mouseout', function () {
                infowindow_berlin.close(map, marker15);
            });
            marker15.addListener('mouseover', function () {
                soundinequality.play(map, marker15);
            });
            marker15.addListener('mouseout', function () {
                soundinequality.pause(map, marker15);
            });

//Daraa
            var marker16 = new google.maps.Marker({
                position: daraa
                , icon: marker16(level)
                , map: map
                , title: 'Daraa'
            });
            marker16.addListener('mouseover', function () {
                infowindow_daraa.open(map, marker16);
            });
            marker16.addListener('mouseout', function () {
                infowindow_daraa.close(map, marker16);
            });
            marker16.addListener('mouseover', function () {
                soundinequality.play(map, marker16);
            });
            marker16.addListener('mouseout', function () {
                soundinequality.pause(map, marker16);
            });


            var marker17 = new google.maps.Marker({
                position: somalia
                , icon: marker17(level)
                , map: map
                , title: 'Somalia'
            });
            marker17.addListener('mouseover', function () {
                infowindow_somalia.open(map, marker17);
            });
            marker17.addListener('mouseout', function () {
                infowindow_somalia.close(map, marker17);
            });
            marker17.addListener('mouseover', function () {
                soundinequality.play(map, marker17);
            });
            marker17.addListener('mouseout', function () {
                soundinequality.pause(map, marker17);
            });
            var marker18 = new google.maps.Marker({
                position: mosney
                , icon: marker18(level)
                , map: map
                , title: 'Mosney'
            });
            marker18.addListener('mouseover', function () {
                infowindow_mosney.open(map, marker18);
            });
            marker18.addListener('mouseout', function () {
                infowindow_mosney.close(map, marker18);
            });
            marker18.addListener('mouseover', function () {
                soundinequality.play(map, marker18);
            });
            marker18.addListener('mouseout', function () {
                soundinequality.pause(map, marker18);
            });

        }


