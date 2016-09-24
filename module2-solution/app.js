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

	boughtList.addItem = function () {
		ShoppingListCheckOffService.addItem(boughtList.itemName, boughtList.itemQuantity);
	}
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

	var toBuyListItems = [apple, cookie, banana];

	// List of bought items
	var boughtListItems = [];

	service.addItem = function (itemName, quantity) {
		var item = {
			name: itemName,
			quantity: quantity
		};
		boughtListItems.push(item);
	};

	service.removeItem = function (itemIndex) {
		this.addItem(toBuyListItems[itemIndex].name, toBuyListItems[itemIndex].quantity);
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