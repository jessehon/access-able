angular.module('starter').controller('MapController',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService
      ) {

      /**
       * Once state loaded, get put map on scope.
       */
      $scope.$on("$stateChangeSuccess", function() {

        $scope.locations = LocationsService.savedLocations;
        $scope.newLocation;

        if(!InstructionsService.instructions.newLocations.seen) {

          var instructionsPopup = $ionicPopup.alert({
            title: 'Add Locations',
            template: InstructionsService.instructions.newLocations.text
          });
          instructionsPopup.then(function(res) {
            InstructionsService.instructions.newLocations.seen = true;
            });

        }

        $scope.map = {
          defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          markers : {
          },
          tramStopIcon: {
              iconUrl: 'img/map-pin.png',
              shadowUrl: 'img/map-pin.png',
              iconSize:     [20, 30], // size of the icon
              shadowSize:   [0, 0], // size of the shadow
              iconAnchor:   [10, 30], // point of the icon which will correspond to marker's location
              // shadowAnchor: [4, 62],  // the same for the shadow
              popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
          },
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

        $scope.map.markers = [
          {lng:145.0129427,lat:-37.811808,icon:$scope.map.tramStopIcon,message:"25-River Bvd/Victoria St (Richmond)"},
          {lng:145.0132383,lat:-37.811786,icon:$scope.map.tramStopIcon,message:"25-River Bvd/Victoria St (Richmond)"},
          {lng:144.9451645,lat:-37.8215299,icon:$scope.map.tramStopIcon,message:"D17-Merchant St/Collins St (Docklands)"},
          {lng:144.9455346,lat:-37.8214637,icon:$scope.map.tramStopIcon,message:"D17-Merchant St/Collins St (Docklands)"},
          {lng:145.0263326,lat:-37.8217453,icon:$scope.map.tramStopIcon,message:"24-Birdwood Ave/Domain Rd (Melbourne City)"},
          {lng:144.9692492,lat:-37.8214875,icon:$scope.map.tramStopIcon,message:"14-Arts Centre/St Kilda Rd (Southbank)"},
          {lng:144.9695724,lat:-37.8220077,icon:$scope.map.tramStopIcon,message:"14-Arts Centre/St Kilda Rd (Southbank)"},
          {lng:144.9733981,lat:-37.8620868,icon:$scope.map.tramStopIcon,message:"135-Jacka Bvd/Fitzroy St (St Kilda)"},
          {lng:144.9731574,lat:-37.8623053,icon:$scope.map.tramStopIcon,message:"135-Jacka Bvd/Fitzroy St (St Kilda)"},
          {lng:144.9419006,lat:-37.8209231,icon:$scope.map.tramStopIcon,message:"D16-Harbour Esp/Collins St (Docklands)"},
          {lng:144.9768576,lat:-37.866971,icon:$scope.map.tramStopIcon,message:"138-Luna Park/The Esplanade (St Kilda)"},
          {lng:144.9772548,lat:-37.8670073,icon:$scope.map.tramStopIcon,message:"138-Luna Park/The Esplanade (St Kilda)"},
          {lng:144.9805802,lat:-37.8499164,icon:$scope.map.tramStopIcon,message:"27-High St/St Kilda Rd (South Melbourne)"},
          {lng:144.9802977,lat:-37.8493541,icon:$scope.map.tramStopIcon,message:"27-High St/St Kilda Rd (South Melbourne)"},
          {lng:144.9373418,lat:-37.8370599,icon:$scope.map.tramStopIcon,message:"128-Graham St/Light Rail (Port Melbourne)"},
          {lng:144.9372697,lat:-37.8370254,icon:$scope.map.tramStopIcon,message:"128-Graham St/Light Rail (Port Melbourne)"},
          {lng:145.1157036,lat:-37.8169575,icon:$scope.map.tramStopIcon,message:"56-Elgar Rd/Whitehorse Rd (Box Hill)"},
          {lng:145.1143182,lat:-37.8168517,icon:$scope.map.tramStopIcon,message:"56-Elgar Rd/Whitehorse Rd (Box Hill)"},
          {lng:145.1097768,lat:-37.816298,icon:$scope.map.tramStopIcon,message:"55-Hood St/Whitehorse Rd (Mont Albert)"},
          {lng:145.1094709,lat:-37.816197,icon:$scope.map.tramStopIcon,message:"55-Hood St/Whitehorse Rd (Mont Albert)"},
          {lng:144.9817269,lat:-37.8530702,icon:$scope.map.tramStopIcon,message:"29-Union St/St Kilda Rd (St Kilda)"},
          {lng:144.981442,lat:-37.8525003,icon:$scope.map.tramStopIcon,message:"29-Union St/St Kilda Rd (St Kilda)"},
          {lng:145.1199768,lat:-37.8175127,icon:$scope.map.tramStopIcon,message:"57-Nelson Rd/Whitehorse Rd (Box Hill)"},
          {lng:145.1186018,lat:-37.8174048,icon:$scope.map.tramStopIcon,message:"57-Nelson Rd/Whitehorse Rd (Box Hill)"},
          {lng:144.9858087,lat:-37.8092905,icon:$scope.map.tramStopIcon,message:"16-Wellington St/Victoria Pde (East Melbourne)"},
          {lng:144.9861195,lat:-37.8092575,icon:$scope.map.tramStopIcon,message:"16-Wellington St/Victoria Pde (East Melbourne)"},
          {lng:144.9485271,lat:-37.8302312,icon:$scope.map.tramStopIcon,message:"126-Montague St/Light Rail (South Melbourne)"},
          {lng:144.9487462,lat:-37.8301805,icon:$scope.map.tramStopIcon,message:"126-Montague St/Light Rail (South Melbourne)"},
          {lng:145.1031378,lat:-37.8154385,icon:$scope.map.tramStopIcon,message:"54-Inglisby Rd/Whitehorse Rd (Mont Albert)"},
          {lng:145.1027311,lat:-37.8154525,icon:$scope.map.tramStopIcon,message:"54-Inglisby Rd/Whitehorse Rd (Mont Albert)"},
          {lng:144.952379,lat:-37.797502,icon:$scope.map.tramStopIcon,message:"15-Park Dr/Flemington Rd (North Melbourne)"},
          {lng:144.9633544,lat:-37.8141921,icon:$scope.map.tramStopIcon,message:"5-Elizabeth St/Bourke St (Melbourne City)"},
          {lng:144.9636443,lat:-37.8140479,icon:$scope.map.tramStopIcon,message:"5-Elizabeth St/Bourke St (Melbourne City)"},
          {lng:144.9664853,lat:-37.8132232,icon:$scope.map.tramStopIcon,message:"6-Swanston St/Bourke St (Melbourne City)"},
          {lng:144.9830088,lat:-37.8089249,icon:$scope.map.tramStopIcon,message:"15-Smith St/Victoria Pde (Fitzroy)"},
          {lng:144.9821123,lat:-37.8088942,icon:$scope.map.tramStopIcon,message:"15-Smith St/Victoria Pde (Fitzroy)"},
          {lng:144.9634163,lat:-37.816406,icon:$scope.map.tramStopIcon,message:"5-Elizabeth St/Bourke St (Melbourne City)"},
          {lng:144.9637704,lat:-37.8162505,icon:$scope.map.tramStopIcon,message:"5-Elizabeth St/Bourke St (Melbourne City)"},
          {lng:144.9647227,lat:-37.8182355,icon:$scope.map.tramStopIcon,message:"4-Elizabeth St/Flinders St (Melbourne City)"},
          {lng:144.9642165,lat:-37.8184459,icon:$scope.map.tramStopIcon,message:"4-Elizabeth St/Flinders St (Melbourne City)"},
          {lng:144.9668219,lat:-37.8176702,icon:$scope.map.tramStopIcon,message:"5-Swanston St/Flinders St (Melbourne City)"},
          {lng:144.9564307,lat:-37.8035936,icon:$scope.map.tramStopIcon,message:"11-Queensberry St/Peel St (North Melbourne)"},
          {lng:144.9563961,lat:-37.8033024,icon:$scope.map.tramStopIcon,message:"11-Queensberry St/Peel St (North Melbourne)"},
          {lng:145.0261668,lat:-37.8215169,icon:$scope.map.tramStopIcon,message:"27-Burwood Rd/Power St (Hawthorn)"},
          {lng:144.9754262,lat:-37.8608817,icon:$scope.map.tramStopIcon,message:"134-Park St/Fitzroy St (St Kilda)"},
          {lng:144.9752609,lat:-37.8610548,icon:$scope.map.tramStopIcon,message:"134-Park St/Fitzroy St (St Kilda)"},
          {lng:144.9567638,lat:-37.801568,icon:$scope.map.tramStopIcon,message:"12-Flemington Rd/Peel St (North Melbourne)"},
          {lng:144.9567579,lat:-37.8013938,icon:$scope.map.tramStopIcon,message:"12-Flemington Rd/Peel St (North Melbourne)"},
          {lng:144.973557,lat:-37.8134057,icon:$scope.map.tramStopIcon,message:"8-Spring St/Collins St (Melbourne City)"},
          {lng:144.9732155,lat:-37.8135642,icon:$scope.map.tramStopIcon,message:"8-Spring St/Collins St (Melbourne City)"},
          {lng:144.9630986,lat:-37.8051201,icon:$scope.map.tramStopIcon,message:"4-Queensberry St/Swanston St (Carlton)"},
          {lng:144.963096,lat:-37.805711,icon:$scope.map.tramStopIcon,message:"4-Queensberry St/Swanston St (Carlton)"},
          {lng:144.9549367,lat:-37.8188703,icon:$scope.map.tramStopIcon,message:"1-Spencer St/Bourke St (Melbourne City)"},
          {lng:144.9552773,lat:-37.8187086,icon:$scope.map.tramStopIcon,message:"1-Spencer St/Bourke St (Melbourne City)"},
          {lng:145.0258154,lat:-37.8248139,icon:$scope.map.tramStopIcon,message:"28-Wattle Rd/Power St (Hawthorn)"},
          {lng:145.0257572,lat:-37.8249148,icon:$scope.map.tramStopIcon,message:"28-Wattle Rd/Power St (Hawthorn)"},
          {lng:144.9786399,lat:-37.8445805,icon:$scope.map.tramStopIcon,message:"25-Commercial Rd/St Kilda Rd (Melbourne City)"},
          {lng:144.9783471,lat:-37.8440084,icon:$scope.map.tramStopIcon,message:"25-Commercial Rd/St Kilda Rd (Melbourne City)"},
          {lng:144.9328633,lat:-37.8407252,icon:$scope.map.tramStopIcon,message:"129-Beacon Cove/Light Rail (Port Melbourne)"},
          {lng:145.0103595,lat:-37.8114561,icon:$scope.map.tramStopIcon,message:"24-Burnley St/Victoria St (Richmond)"},
          {lng:145.0099791,lat:-37.8114781,icon:$scope.map.tramStopIcon,message:"24-Burnley St/Victoria St (Richmond)"},
          {lng:144.9784388,lat:-37.8084352,icon:$scope.map.tramStopIcon,message:"13-Lansdowne St/Victoria Pde (Fitzroy)"},
          {lng:144.978786,lat:-37.8085403,icon:$scope.map.tramStopIcon,message:"13-Lansdowne St/Victoria Pde (Fitzroy)"},
          {lng:144.9480217,lat:-37.8208084,icon:$scope.map.tramStopIcon,message:"D16-Harbour Esp/Collins St (Docklands)"},
          {lng:144.9481135,lat:-37.820846,icon:$scope.map.tramStopIcon,message:"D16-Harbour Esp/Collins St (Docklands)"},
          {lng:144.9431246,lat:-37.8335304,icon:$scope.map.tramStopIcon,message:"127-North Port Station/Light Rail (Port Melbourne)"},
          {lng:144.9435442,lat:-37.8331957,icon:$scope.map.tramStopIcon,message:"127-North Port Station/Light Rail (Port Melbourne)"},
          {lng:144.9903468,lat:-37.8097751,icon:$scope.map.tramStopIcon,message:"18-Hoddle St/Victoria St (Richmond)"},
          {lng:144.9907206,lat:-37.8097496,icon:$scope.map.tramStopIcon,message:"18-Hoddle St/Victoria St (Richmond)"},
          {lng:144.952449,lat:-37.797645,icon:$scope.map.tramStopIcon,message:"15-Murphy St/Flemington Rd (North Melbourne)"},
          {lng:145.1223116,lat:-37.8178851,icon:$scope.map.tramStopIcon,message:"58-Box Hill Central/Whitehorse Rd (Box Hill)"},
          {lng:145.1218749,lat:-37.8177506,icon:$scope.map.tramStopIcon,message:"58-Box Hill Central/Whitehorse Rd (Box Hill)"},
          {lng:144.9966453,lat:-37.8182809,icon:$scope.map.tramStopIcon,message:"17-Bosisto St/Bridge Rd (Richmond)"},
          {lng:144.9965289,lat:-37.8182974,icon:$scope.map.tramStopIcon,message:"17-Bosisto St/Bridge Rd (Richmond)"},
          {lng:145.0248113,lat:-37.8213914,icon:$scope.map.tramStopIcon,message:"26-Hawthorn Railway Station/Burwood Rd (Hawthorn)"},
          {lng:145.0246753,lat:-37.8213441,icon:$scope.map.tramStopIcon,message:"26-Hawthorn Railway Station/Burwood Rd (Hawthorn)"},
          {lng:145.0841552,lat:-37.794619,icon:$scope.map.tramStopIcon,message:"51-Balwyn Rd/Doncaster Rd (Balwyn North)"},
          {lng:144.9743702,lat:-37.8123041,icon:$scope.map.tramStopIcon,message:"10-Parliament Railway Station/Macarthur St (East Melbourne)"},
          {lng:144.9744373,lat:-37.8123291,icon:$scope.map.tramStopIcon,message:"10-Parliament Railway Station/Macarthur St (East Melbourne)"},
          {lng:144.9642351,lat:-37.7987494,icon:$scope.map.tramStopIcon,message:"1-Melbourne University/Swanston St (Carlton)"},
          {lng:144.9641802,lat:-37.7992783,icon:$scope.map.tramStopIcon,message:"1-Melbourne University/Swanston St (Carlton)"},
          {lng:144.9574214,lat:-37.8018687,icon:$scope.map.tramStopIcon,message:"9-Haymarket/Elizabeth St (Melbourne City)"},
          {lng:144.9577721,lat:-37.8024441,icon:$scope.map.tramStopIcon,message:"9-Haymarket/Elizabeth St (Melbourne City)"},
          {lng:144.9666219,lat:-37.8157577,icon:$scope.map.tramStopIcon,message:"11-City Square/Swanston St (Melbourne City)"},
          {lng:144.9669713,lat:-37.8162875,icon:$scope.map.tramStopIcon,message:"11-City Square/Swanston St (Melbourne City)"},
          {lng:144.9652704,lat:-37.8127807,icon:$scope.map.tramStopIcon,message:"10-Bourke Street Mall/Swanston St (Melbourne City)"},
          {lng:144.9655814,lat:-37.8133201,icon:$scope.map.tramStopIcon,message:"10-Bourke Street Mall/Swanston St (Melbourne City)"},
          {lng:144.9658091,lat:-37.8157186,icon:$scope.map.tramStopIcon,message:"6-Melbourne Town Hall/Collins St (Melbourne City)"},
          {lng:144.9662848,lat:-37.8155104,icon:$scope.map.tramStopIcon,message:"6-Melbourne Town Hall/Collins St (Melbourne City)"},
          {lng:145.0163925,lat:-37.8199585,icon:$scope.map.tramStopIcon,message:"23-Hawthorn Bridge/Church St (Hawthorn)"},
          {lng:145.0161725,lat:-37.8200173,icon:$scope.map.tramStopIcon,message:"23-Hawthorn Bridge/Church St (Hawthorn)"},
          {lng:144.9536165,lat:-37.8277219,icon:$scope.map.tramStopIcon,message:"125A-Southbank Tram Depot/Light Rail (South Melbourne)"},
          {lng:144.954089,lat:-37.8274205,icon:$scope.map.tramStopIcon,message:"125A-Southbank Tram Depot/Light Rail (South Melbourne)"},
          {lng:144.9501185,lat:-37.8202644,icon:$scope.map.tramStopIcon,message:"D15-Batman's Hill/700 Collins St (Docklands)"},
          {lng:144.9505088,lat:-37.8200881,icon:$scope.map.tramStopIcon,message:"D15-Batman's Hill/700 Collins St (Docklands)"},
          {lng:144.9639395,lat:-37.8099109,icon:$scope.map.tramStopIcon,message:"8-Melbourne Central Station/Swanston St (Melbourne City)"},
          {lng:144.9642447,lat:-37.8103996,icon:$scope.map.tramStopIcon,message:"8-Melbourne Central Station/Swanston St (Melbourne City)"},
          {lng:144.9552398,lat:-37.7998548,icon:$scope.map.tramStopIcon,message:"14-Royal Melbourne Hospital/Flemington Rd (Parkville)"},
          {lng:144.9556209,lat:-37.8000747,icon:$scope.map.tramStopIcon,message:"14-Royal Melbourne Hospital/Flemington Rd (Parkville)"},
          {lng:144.9636393,lat:-37.8026319,icon:$scope.map.tramStopIcon,message:"3-Lincoln Square/Swanston St (Carlton)"},
          {lng:144.9636398,lat:-37.8019999,icon:$scope.map.tramStopIcon,message:"3-Lincoln Square/Swanston St (Carlton)"},
          {lng:144.9632586,lat:-37.8082477,icon:$scope.map.tramStopIcon,message:"7-RMIT University/Swanston St (Melbourne City)"},
          {lng:144.9629659,lat:-37.8078026,icon:$scope.map.tramStopIcon,message:"7-RMIT University/Swanston St (Melbourne City)"},
          {lng:144.9719265,lat:-37.8325133,icon:$scope.map.tramStopIcon,message:"20-Domain Interchange/St Kilda Rd (Melbourne City)"},
          {lng:144.9723736,lat:-37.8328227,icon:$scope.map.tramStopIcon,message:"20-Domain Interchange/St Kilda Rd (Melbourne City)"},
          {lng:144.9718727,lat:-37.832541,icon:$scope.map.tramStopIcon,message:"20-Domain Interchange/St Kilda Rd (Melbourne City)"},
          {lng:144.9723214,lat:-37.8328523,icon:$scope.map.tramStopIcon,message:"20-Domain Interchange/St Kilda Rd (Melbourne City)"},
          {lng:145.0210707,lat:-37.820885,icon:$scope.map.tramStopIcon,message:"25-St James Park/Burwood Rd (Hawthorn)"},
          {lng:145.0211325,lat:-37.8209269,icon:$scope.map.tramStopIcon,message:"25-St James Park/Burwood Rd (Hawthorn)"},
          {lng:144.9676771,lat:-37.8180526,icon:$scope.map.tramStopIcon,message:"13-Federation Square/Swanston St (Melbourne City)"},
          {lng:144.9679708,lat:-37.8185299,icon:$scope.map.tramStopIcon,message:"13-Federation Square/Swanston St (Melbourne City)"},
          {lng:144.959827,lat:-37.8068989,icon:$scope.map.tramStopIcon,message:"7-Queen Victoria Market/Elizabeth St (Melbourne City)"},
          {lng:144.9595921,lat:-37.8065626,icon:$scope.map.tramStopIcon,message:"7-Queen Victoria Market/Elizabeth St (Melbourne City)"},
          {lng:144.9761895,lat:-37.8082617,icon:$scope.map.tramStopIcon,message:"12-St Vincents Plaza/Victoria Pde (Fitzroy)"},
          {lng:144.9764819,lat:-37.8082288,icon:$scope.map.tramStopIcon,message:"12-St Vincents Plaza/Victoria Pde (Fitzroy)"},
          {lng:144.9764886,lat:-37.8081759,icon:$scope.map.tramStopIcon,message:"12-St Vincents Plaza/Victoria Pde (Fitzroy)"},
          {lng:144.9935988,lat:-37.8179623,icon:$scope.map.tramStopIcon,message:"15-Epworth Hospital/Bridge Rd (Richmond)"},
          {lng:144.9939066,lat:-37.8179661,icon:$scope.map.tramStopIcon,message:"15-Epworth Hospital/Bridge Rd (Richmond)"},
          {lng:144.9630639,lat:-37.813984,icon:$scope.map.tramStopIcon,message:"3-Bourke Street Mall/Elizabeth St (Melbourne City)"},
          {lng:144.9521436,lat:-37.8196775,icon:$scope.map.tramStopIcon,message:"D14-Southern Cross Station/Collins St (Docklands)"},
          {lng:144.9526123,lat:-37.8194853,icon:$scope.map.tramStopIcon,message:"D14-Southern Cross Station/Collins St (Docklands)"},
          {lng:144.9735835,lat:-37.8652556,icon:$scope.map.tramStopIcon,message:"136-The Esplanade (St Kilda)"},
          {lng:144.9739029,lat:-37.8653941,icon:$scope.map.tramStopIcon,message:"136-The Esplanade (St Kilda)"},
          {lng:145.0264624,lat:-37.8658082,icon:$scope.map.tramStopIcon,message:"52-Glenferrie Rd/Dandenong Rd (Malvern)"},
          {lng:145.026745,lat:-37.8658521,icon:$scope.map.tramStopIcon,message:"52-Glenferrie Rd/Dandenong Rd (Malvern)"},
          {lng:144.9707864,lat:-37.8142072,icon:$scope.map.tramStopIcon,message:"7-101 Collins St (Melbourne City)"},
          {lng:144.9704288,lat:-37.8143781,icon:$scope.map.tramStopIcon,message:"7-101 Collins St (Melbourne City)"},
        ];

        $scope.goTo(0);

      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };

      $ionicModal.fromTemplateUrl('templates/addLocation.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });

      /**
       * Detect user long-pressing on map to add new location
       */
      $scope.$on('leafletDirectiveMap.contextmenu', function(event, locationEvent){
        $scope.newLocation = new Location();
        $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
        $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
        $scope.modal.show();
      });

      $scope.saveLocation = function() {
        LocationsService.savedLocations.push($scope.newLocation);
        $scope.modal.hide();
        $scope.goTo(LocationsService.savedLocations.length - 1);
      };

      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.center  = {
          lat : location.lat,
          lng : location.lng,
          zoom : 12
        };

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          message: location.name,
          focus: true,
          draggable: false
        };

      };

      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };

    }]);
