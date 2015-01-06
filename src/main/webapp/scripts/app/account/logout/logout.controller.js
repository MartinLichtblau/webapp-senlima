'use strict';

angular.module('senlimaApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
