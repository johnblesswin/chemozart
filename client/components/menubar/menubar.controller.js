'use strict';

angular.module('chemartApp')
  .controller('MenubarCtrl', function ($scope, hotkeys, storage, canvas) {

    $scope.print = function () {
      window.print();
    };

    hotkeys.add({
      combo: 'ctrl+s',
      description: 'Save the document',
      callback: function(event) {
        event.preventDefault();
        storage.save();
      }
    });

    hotkeys.add({
      combo: 'ctrl+del',
      description: 'Delete the document',
      callback: function(event) {
        event.preventDefault();
        storage.delete(storage.current);
      }
    });

    hotkeys.add({
      combo: 'ctrl+k',
      description: 'Clear the canvas',
      callback: function(event) {
        event.preventDefault();
        canvas.clear();
      }
    });

    hotkeys.add({
      combo: 'ctrl+b',
      description: 'New document',
      callback: function(event) {
        event.preventDefault();
        storage.new();
      }
    });

  });
