// SERVICES
weatherApp.service('cityService', function() {
    
    this.city = 'Boston, MA';
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    // API key needs to be removed and stored securely.
    this.GetWeather = function(city, days, apiKey) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });


        return weatherAPI.get({ q: city, cnt: days, appid: apiKey });

    };
}]);
