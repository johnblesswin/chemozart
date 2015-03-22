'use strict';

angular.module('chemartApp')
  .directive('help', function () {
    return {
      restrict: 'E',
      link: function (scope, elem) {
        scope.help = function () {
          elem.addClass('show');
        };

        elem.on('click', function () {
          elem.removeClass('show').addClass('hide');
          setTimeout(function () {
            elem.removeClass('hide');
          }, 1000);
        });
      },
      templateUrl: 'components/help/help.html'
    }
  });
