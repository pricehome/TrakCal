// Storage Control

// Item Control
const ItemCtrl = (function() {
	// console.log('item control')
	// Item Constructor
	const Item = function(id, name, calories) {
		this.id = id
		this.name = name
		this.calories = calories
	}
	// Data Structure/STATE   data could be called 'state'
	const data = {
		items: [
			{id: 0, name: 'Steak Dinner', calories: 1200},
			{id: 1, name: 'Cookie', calories: 400},
			{id: 2, name: 'Eggs', calories: 300}
		],
		currentItem: null,
		totalCalories: 0
	}
	// Data structure above is private so the return (for temp dev purposes) allows access from chrome
	// Public Method - getItems
	return {
		getItems: function() {
			return data.items
		},
		logData: function() {
			return data
		}
	}
})()

// UI Control
const UICtrl = (function() {
	const UISelectors = {
		itemList: '#item-list'
	}
	// Public Method
	return {
		populateItemList: function(items) {
			let html = ''

			items.forEach(function(item) {
				html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      </li>`
			})

			// insert list items
			document.querySelector(UISelectors.itemList).innerHTML = html
		}
	}
})()

// App Control
const App = (function(itemCtrl, UICtrl) {
	// console.log('app')
	// Public methods
	return {
		init: function() {
			// Fetch items from data structure
			const items = ItemCtrl.getItems()

			// Populate list with items
			UICtrl.populateItemList(items)
		}
	}
})(ItemCtrl, UICtrl)

// Intitialize App
App.init()
