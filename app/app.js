var app = angular.module('app', ['ngRoute','ngCookies', '$http']);

angular.module('app', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when("/",
    {
      templateUrl   : "templates/accueil.tpl.htm",
      controller    : "homeController",
      PageTitle     : "Valérian Polizzi - Présentation",
      PageDesc      : "Valérian Polizzi est étudiant en 3ème année à Epitech Nice, parallèlement auto-entrepreneur en tant que développeur web, basé sur Nice, France."

    })

    .when("/accueil",
    {
      templateUrl   : "templates/accueil.tpl.htm",
      controller    : "homeController",
      PageTitle     : "Valérian Polizzi - Présentation",
      PageDesc      : "Valérian Polizzi est étudiant en 3ème année à Epitech Nice, parallèlement auto-entrepreneur en tant que développeur web, basé sur Nice, France."
    })

    .when("/experience",
    {
      templateUrl   : "templates/projets.tpl.htm",
      controller    : "homeController",
      PageTitle     : "Valérian Polizzi - Expériences",
      PageDesc      : "Voici les projets que j'ai réalisé, principament dans le domaine du web."

    })

    .when("/formation",
    {
      templateUrl   : "templates/formation.tpl.htm",
      controller    : "homeController",
      PageTitle     : "Valérian Polizzi - Formation",
      PageDesc      : "De l'obtention de mon baccalauréat jusqu'a mon cursus actuel"

    })

    .when("/social",
    {
      templateUrl   : "templates/social.tpl.htm",
      controller    : "socialController",
      PageTitle     : "Valérian Polizzi - Social",
      PageDesc      : "Mon activité sur les réseaux sociaux",
    })

    .when("/contact",
    {
      templateUrl   : "templates/contact.tpl.htm",
      PageTitle     : "Valérian Polizzi - Contact",
      PageDesc      : "N'hésitez pas à me contacter"


    })

    .otherwise({templateUrl: 'templates/static/404.tpl.htm'});
}).run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.PageTitle;
        document.description = $route.current.PageDesc;
    });
}]);;
