(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
	var toBuylist = this;	
	toBuylist.toBuyListItems = ShoppingListCheckOffService.getToBuyListItems();

	toBuylist.removeItem = function (itemIndex) {
		ShoppingListCheckOffService.removeItem(itemIndex);
	}
};

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
	var boughtList = this;
	boughtList.boughtListItems = ShoppingListCheckOffService.getBoughtListItems();
}

function ShoppingListCheckOffService() {
	var service = this;

	// List of to buy items
	var apple = {
			name: "apples",
			quantity: 3
		};
	var cookie = {
		name: "cookies",
		quantity: 4
	}
	var banana = {
		name: "banana",
		quantity: 5
	}
	var candy = {
		name: "candies", 
		quantity: 6
	};
	var book = {
		name: "books",
		quantity: 7
	};

	var toBuyListItems = [apple, cookie, banana, candy, book];

	// List of bought items
	var boughtListItems = [];

	service.removeItem = function (itemIndex) {
		boughtListItems.push(toBuyListItems[itemIndex]);
		toBuyListItems.splice(itemIndex, 1);
	};

	service.getToBuyListItems = function () {
		return toBuyListItems;
	};

	service.getBoughtListItems = function () {
		return boughtListItems;
	};
}

})();