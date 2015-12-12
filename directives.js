weatherApp.directive('weatherReport', function() {
    return {
    // 'A' = Attribute, 'E' = Element, 'C' = Class, 'M' = HTML Comment; These are predefined by Angular.
    // '@' = Passes a string of the data being asked for; '=' = Passes the object being asked for, which can
    // then be accessed as an object.
        restrict: 'AEC',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        },
        transclude: true
    }
    
});