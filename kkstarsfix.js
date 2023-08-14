$(document).ready(function() {
	
	
function noRatingSire() {
	function disableElementInteraction() {
  var element = document.querySelector('.kk-star-ratings');
  if (element) {
    element.style.pointerEvents = 'none';
  }
}
	  // Get the element with the class "kk-star-ratings"
  var ratingElement = document.querySelector('.kk-star-ratings');
  
  if (ratingElement) {
    var dataId = ratingElement.getAttribute('data-id');
    var flag = localStorage.getItem('rated_' + window.location.href);
	

    if (flag === dataId) {
		console.log("rated");
    // Call the function to disable interaction with the element
disableElementInteraction();

 // Get the element with the class "kksr-fuel" and "yellow"
  var fuelElement = document.querySelector('.kksr-fuel.yellow');
  
  if (fuelElement) {
    // Replace "yellow" with "orange" in the class attribute
    fuelElement.classList.remove('yellow');
    fuelElement.classList.add('orange');
  }

    }
  }
  
}
	
noRatingSire();

  // Select the target element
  var targetElement = document.querySelector('.kksr-legend');

  // Create a MutationObserver instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // Check if a <span> element with style="color: green" has been added
      var addedSpans = mutation.addedNodes;
      for (var i = 0; i < addedSpans.length; i++) {
        if (addedSpans[i].nodeName === 'SPAN' && addedSpans[i].style.color === 'green') {
          var dataId = mutation.target.parentElement.getAttribute('data-id');
          
          // Set a flag in local storage for the current URL
          var currentUrl = window.location.href;
          localStorage.setItem('rated_' + currentUrl, dataId);
          
          // Log the dataId and URL to the console
          console.log('DataId:', dataId);
          console.log('URL:', currentUrl);
		  
		  noRatingSire();
        }
      }
    });
  });

  // Configure and start the observer
  var config = { childList: true, subtree: true };
  observer.observe(targetElement, config);
});
