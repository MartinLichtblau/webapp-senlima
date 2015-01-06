'use strict';

angular.module('senlimaApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


