angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Home",
      lat : -37.811808,
      lng : 145.0129427
    },
    {
      name : "Work",
      lat : -37.8215299,
      lat : 144.9451645
    }
  ];

  return locationsObj;

}]);