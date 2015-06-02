(function() {
    angular
        .module('xApp')
        .factory('AuthFactory', auth);

    function auth($rootScope, $sanitize, $http, $location, Api, toaster, jwtHelper) {
        var localToken = 'auth_token';
        var refreshingToken = null;

        return {
            login: login,
            logout: logout,
            getUser: getUser,
            isLoggedIn: isLoggedIn,
            initLogin: initLogin,
            getToken: getToken,
            tokenExpired: tokenExpired,
            setToken: setToken,
            refreshToken: refreshToken
        };

        function getToken() {
            return localStorage.getItem(localToken);
        }

        function setToken(token) {
            localStorage.setItem(localToken, token);
        }

        function login(token) {
            setToken(token);
            $rootScope.$broadcast('auth:login', getUser());
        }

        function logout() {
            localStorage.removeItem(localToken);

            $rootScope.$broadcast('auth:login', null);
        }

        function getUser() {
            var token = getToken();
            if (token) {
                try {
                    return jwtHelper.decodeToken(token).user;
                } catch(err) {}
            }
            return [];
        }

        function tokenExpired() {
            return jwtHelper.isTokenExpired(getToken());
        }

        function isLoggedIn() {
            return getUser().id > 0;
        }

        function initLogin(username, password, remember) {
            Api.auth.save({
                email: $sanitize(username),
                password: $sanitize(password),
                remember: $sanitize(remember)
            }, function (response) {
                login(response.token);
                $location.path('/recent');
                toaster.pop('info', "", "Welcome back, " + getUser().name);
            }, function (response) {
                toaster.pop('error', "Login Failed", response.data[0], 0);
            })
        }

        function refreshToken() {
            if (refreshingToken == null) {
                refreshingToken = $http({
                    url: '/internal/auth/refresh',
                    skipAuthorization: true,
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + getToken()
                    }
                }).then(function(response) {
                    var token = response.data.token;
                    setToken(token);
                    refreshingToken = null;

                    return token;
                });
            }

            return refreshingToken;
        }
    }
})();
