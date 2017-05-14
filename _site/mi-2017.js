
document.querySelector('.nav-toggle').addEventListener('click', function() {
	var activeClass = 'is-active';
	document.querySelector('.nav-menu').classList.toggle(activeClass);
});


var	tabs = {};
tabs.elements = {};
tabs.func = (function(){

	var exports = {};

	exports.init = function(){

		// Tab Navi aktivieren
		var tabNavigations = document.querySelectorAll('.is-tab-navigation');

		for(i=0; i<tabNavigations.length; i++){
			var tabNavigation = tabNavigations[i];
			var htmltabs = tabNavigation.querySelectorAll('.tab-item');
			htmltabs[0].classList.add('is-active');
			selectTab(htmltabs[0]);

			for(i=0; i<htmltabs.length; i++){
				var htmltab = htmltabs[i];

				htmltab.onclick = function(){ selectTab(this); }
			}

		}
	}

	selectTab = function( ele ){

		var target_id = ele.getAttribute('data-tab');
		var targets = document.querySelectorAll('.is-' + target_id);

		// Content ausblenden
		var items = document.querySelectorAll('.is-tab-content');

		for(i=0; i<items.length; i++){
			var item = items[i];
			item.classList.add('is-hidden');
		}

		// gewählten Content einblenden
		var targets = document.querySelectorAll('.is-' + target_id);

		// Content einblenden
		for(i=0; i<targets.length; i++){
			var target = targets[i];
			target.classList.remove('is-hidden');
		}

		// Aktiven Navipunkt markieren
		var elements = ele.parentElement.querySelectorAll('.tab-item');
		for(i=0; i<elements.length; i++){
			var element = elements[i];
			element.classList.remove('is-active');
		}
		ele.classList.add('is-active');

	}


	return exports;
})();

var	more = {};
more.elements = {};
more.func = (function(){

	var exports = {};

	exports.init = function(){

		var elements = document.querySelectorAll('[data-target]');

		for(i=0; i<elements.length; i++){

			var ele = elements[i];

			var item = document.createElement("i");
			item.classList.add("fa");
			item.classList.add("fa-angle-down");
			item.classList.add("fa-lg");
			item.classList.add("more-button");

			item.onclick = function(){

				if(this.classList.contains("active")){
					var target = this.parentElement.getAttribute("data-target");
					this.classList.remove("active");
					document.getElementById(target).classList.add('is-hidden');

				}else{
					var target = this.parentElement.getAttribute("data-target");
					this.classList.add("active");
					document.getElementById(target).classList.remove('is-hidden');
				}


			}
			ele.appendChild(item);
		}



	}


	return exports;
})();


var	panelTabs = {};
panelTabs.elements = {};
panelTabs.func = (function(){

	var exports = {};

	exports.init = function(){

		// Tab Navi aktivieren
		var tabNavigations = document.querySelectorAll('.panel');

		for(i=0; i<tabNavigations.length; i++){
			var tabNavigation = tabNavigations[i];
			var htmltabs = tabNavigation.querySelectorAll('.panel-block');
			htmltabs[0].classList.add('is-active');
			selectPanelTab(htmltabs[0]);

			for(i=0; i<htmltabs.length; i++){
				var htmltab = htmltabs[i];

				htmltab.onclick = function(){ selectPanelTab(this); }
			}

		}
	}

	selectPanelTab = function( ele ){

		var target_id = ele.getAttribute('data-tab');
		var targets = document.querySelectorAll('.is-' + target_id);

		// Content ausblenden
		var items = document.querySelectorAll('.is-tab-content');

		for(i=0; i<items.length; i++){
			var item = items[i];
			item.classList.add('is-hidden');
		}

		// gewählten Content einblenden
		var targets = document.querySelectorAll('.is-' + target_id);

		// Content einblenden
		for(i=0; i<targets.length; i++){
			var target = targets[i];
			target.classList.remove('is-hidden');
		}

		// Aktiven Navipunkt markieren
		var elements = ele.parentElement.querySelectorAll('.panel-block');
		for(i=0; i<elements.length; i++){
			var element = elements[i];
			element.classList.remove('is-active');
		}
		ele.classList.add('is-active');

	}


	return exports;
})();



var urlParams = new URLSearchParams(window.location.search);
if(!urlParams.has('media')){
	more.func.init();
	tabs.func.init();
	panelTabs.func.init();
}
