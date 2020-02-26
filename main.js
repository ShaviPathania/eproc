(function() {
function inject(onInject) {
	if (window.jQuery) {
    var $ = jQuery;
  	onInject($);
  	return;
  }
	var el = document.createElement('script');
  el.src = '//code.jquery.com/jquery-latest.min.js';
  el.onload = function() {
  	jQuery.noConflict();
    var $ = jQuery;
  	onInject($);
  };
  document.head.appendChild(el);
}
inject(function($) {
	
})
})()
