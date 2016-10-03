(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItemsCtrl',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var foundItemsCtrl = this;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;  
  
  narrowItDown.searchTerm = '';
  narrowItDown.getMatchedMenuItems = function () {
  	if (narrowItDown.searchTerm == '') {
  		narrowItDown.found = [];
  	} else {
  		MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
  		.then(function (foundItems) {
      		narrowItDown.found = foundItems;
    	});
  	}
  }

  narrowItDown.removeItem = function(index) {
    narrowItDown.found.splice(index, 1);
  }
};

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
	return $http
      .get(ApiBasePath + '/menu_items.json')
      .then(function (response) {
        return response.data.menu_items.filter(function (menuItem) {
          return menuItem.description.indexOf(searchTerm) >= 0;
        });
      });
  } 
}
})();